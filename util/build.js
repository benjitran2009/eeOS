import { copyFileSync } from "node:fs";
import path from "node:path";
import webpack from "webpack";
const __dirname = process.cwd();
console.log("Building kernel...");
webpack({
    mode: "production",
    entry: "./src/kernel/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "kernel.js",
    },
}, (err, stats) => {
    if (err || stats.hasErrors()) {
        throw new Error(`Failed build: ${err}`)
    }

});
console.log("Copying loader...");
copyFileSync(path.resolve(__dirname, "src", "loader", "index.html"), path.resolve(__dirname, "dist", "index.html"));