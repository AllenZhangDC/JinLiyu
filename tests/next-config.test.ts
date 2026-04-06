import assert from "node:assert/strict";
import test from "node:test";

test("root path is not rewritten to a missing index.html file", async () => {
  const { default: nextConfig } = await import("../next.config");

  const rewrites =
    typeof nextConfig.rewrites === "function" ? await nextConfig.rewrites() : undefined;

  const beforeFiles = Array.isArray(rewrites?.beforeFiles) ? rewrites.beforeFiles : [];
  const rootRewrite = beforeFiles.find((rule) => rule.source === "/");

  assert.equal(
    rootRewrite,
    undefined,
    "rewriting / to /index.html breaks the Next.js app because there is no index.html route",
  );
});
