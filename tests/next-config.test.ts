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

test("legacy static html paths redirect to current app routes", async () => {
  const { default: nextConfig } = await import("../next.config");

  const redirects =
    typeof nextConfig.redirects === "function" ? await nextConfig.redirects() : [];

  assert.ok(
    redirects.some((rule) => rule.source === "/index.html" && rule.destination === "/" && rule.permanent),
    "expected /index.html to redirect permanently to /",
  );
  assert.ok(
    redirects.some(
      (rule) => rule.source === "/index_zh.html" && rule.destination === "/zh" && rule.permanent,
    ),
    "expected /index_zh.html to redirect permanently to /zh",
  );
});
