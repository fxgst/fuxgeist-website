import { readdirSync } from "node:fs";
import { basename, resolve } from "node:path";
import { defineConfig } from "vite";

const frontendRoot = resolve(__dirname, "frontend");
const frontendSrc = resolve(frontendRoot, "src");
const htmlInputs = Object.fromEntries(
	readdirSync(frontendSrc)
		.filter((file) => file.endsWith(".html"))
		.map((file) => [basename(file, ".html"), resolve(frontendSrc, file)]),
);

export default defineConfig({
	root: frontendSrc,
	publicDir: resolve(frontendRoot, "assets"),
	build: {
		outDir: resolve(__dirname, "dist"),
		emptyOutDir: true,
		rollupOptions: {
			input: htmlInputs,
		},
	},
});
