import { resolve } from "node:path";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	root: "./src/client",
	plugins: [
		react(),
		cloudflare({
			configPath: resolve(__dirname, "wrangler.jsonc"),
		}),
	],
});
