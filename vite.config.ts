import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        target: "esnext",
        polyfillDynamicImport: false,
        rollupOptions: {
            external: ["node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.css"],
        },
    },
})
