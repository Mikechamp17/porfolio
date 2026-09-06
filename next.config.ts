import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // transformers.js ships native ONNX bindings; keep it out of the bundle.
  serverExternalPackages: ["@huggingface/transformers", "onnxruntime-node", "sharp"],
  // Vercel functions run on linux/x64 (glibc). Drop the other platforms'
  // binaries from the trace or the function exceeds the 250 MB limit.
  // The .node binding dlopens libonnxruntime.so.1 next to it, which static
  // tracing cannot see, so pull the whole linux/x64 directory in explicitly.
  outputFileTracingIncludes: {
    "/*": ["./node_modules/onnxruntime-node/bin/napi-v6/linux/x64/**"],
  },
  outputFileTracingExcludes: {
    "/*": [
      "./node_modules/onnxruntime-node/bin/napi-v6/darwin/**",
      "./node_modules/onnxruntime-node/bin/napi-v6/win32/**",
      "./node_modules/onnxruntime-node/bin/napi-v6/linux/arm64/**",
      "./node_modules/@img/sharp-libvips-linuxmusl-x64/**",
      "./node_modules/@img/sharp-linuxmusl-x64/**",
      "./node_modules/@img/sharp-wasm32/**",
    ],
  },
};

export default nextConfig;
