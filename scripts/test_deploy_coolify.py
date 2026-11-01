import importlib.util
import io
import unittest
from pathlib import Path
from unittest.mock import patch
from urllib.error import HTTPError, URLError

spec = importlib.util.spec_from_file_location("deploy", Path(__file__).with_name("deploy-coolify.py"))
deploy = importlib.util.module_from_spec(spec)
spec.loader.exec_module(deploy)


class DeploymentTests(unittest.TestCase):
    @patch.dict("os.environ", {}, clear=True)
    def test_local_deployment_is_rejected(self):
        with self.assertRaisesRegex(RuntimeError, "GitHub Actions"):
            deploy.release_revision()

    @patch.dict("os.environ", {"GITHUB_ACTIONS": "true", "GITHUB_REF": "refs/heads/main", "GITHUB_SHA": "expected"}, clear=True)
    @patch.object(deploy.subprocess, "check_output", return_value="different")
    def test_mismatched_checkout_is_rejected(self, command):
        with self.assertRaisesRegex(RuntimeError, "modified checkout"):
            deploy.release_revision()

    @patch.dict("os.environ", {"COOLIFY_TOKEN": "test"})
    @patch.object(deploy.time, "sleep")
    def test_transient_read_retries(self, sleep):
        response = io.BytesIO(b'{"status":"finished"}')
        with patch.object(deploy, "urlopen", side_effect=[URLError("temporary"), response]) as request:
            self.assertEqual(deploy.api("deployments/test")["status"], "finished")
            self.assertEqual(request.call_count, 2)

    @patch.dict("os.environ", {"COOLIFY_TOKEN": "test"})
    def test_uncertain_post_is_not_repeated(self):
        with patch.object(deploy, "urlopen", side_effect=URLError("lost response")) as request:
            with self.assertRaises(URLError):
                deploy.api("deploy?uuid=test", "POST", {})
            self.assertEqual(request.call_count, 1)

    @patch.dict("os.environ", {"COOLIFY_TOKEN": "test"})
    def test_auth_failure_does_not_retry(self):
        error = HTTPError("https://example.com", 403, "forbidden", {}, None)
        with patch.object(deploy, "urlopen", side_effect=error) as request:
            with self.assertRaises(HTTPError):
                deploy.api("applications/test")
            self.assertEqual(request.call_count, 1)


if __name__ == "__main__":
    unittest.main()
