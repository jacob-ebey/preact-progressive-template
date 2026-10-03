import fullstack from "@hiogawa/vite-plugin-fullstack";
import preact from "@preact/preset-vite";
import tailwind from "@tailwindcss/vite";
import { defineConfig, lazyPlugins } from "vite-plus";
import devtools from "vite-plugin-devtools-json";
import preactProgressive from "vite-plugin-preact-progressive";

export default defineConfig({
  plugins: lazyPlugins(() => [tailwind(), preactProgressive(), preact(), fullstack(), devtools()]),
  environments: {
    client: {
      build: {
        manifest: true,
        outDir: "./dist/client",
        rolldownOptions: {
          input: {
            index: "./app/entry.client.ts",
          },
        },
      },
    },
    ssr: {
      build: {
        outDir: "./dist/ssr",
        emitAssets: true,
        rolldownOptions: {
          input: {
            index: "./app/entry.server.tsx",
          },
        },
      },
    },
  },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
