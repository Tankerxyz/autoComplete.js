import babel from "rollup-plugin-babel";
import { eslint } from "rollup-plugin-eslint";
import cleanup from "rollup-plugin-cleanup";
import { uglify } from "rollup-plugin-uglify";
import pkg from "./package.json";

export default [
	{
		input: "src/models/autoComplete.js",
		output: {
			file: pkg.browser,
			name: "autoComplete",
			format: "umd"
		},
		plugins: [
			eslint(),
			babel({
				exclude: "node_modules/**",
				presets: ["@babel/preset-env"],
        runtimeHelpers: true,
        // externalHelpers: true,
				// plugins: ["@babel/plugin-transform-runtime"]
			}),
			// uglify({
			// 	compress: {
			// 		toplevel: true,
			// 		drop_console: true
			// 	}
			// }),
		]
	},
	{
		input: "src/models/autoComplete.js",
		output: {
			file: pkg.main,
			name: "autoComplete",
			format: "umd"
		},
		plugins: [
			babel({
				exclude: "node_modules/**",
				presets: ["@babel/preset-env"],
			}),
			cleanup(),
		]
	}
];