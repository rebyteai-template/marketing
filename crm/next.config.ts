import type { NextConfig } from "next";
// Provide Cloudflare bindings (D1, secrets) to `next dev` so local dev mirrors
// the deployed Worker. No-op outside of `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  transpilePackages: ["@react-email/components", "@react-email/render"],
  serverExternalPackages: ["csv-parse", "@libsql/client"],
  images: { unoptimized: true },
};

export default nextConfig;

void initOpenNextCloudflareForDev();
