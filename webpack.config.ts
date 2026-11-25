import path from "node:path";
import { fileURLToPath } from "node:url";

import webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
    mode: "production",
    entry: "./foo.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "foo.bundle.js",
    },
};

export default config;
