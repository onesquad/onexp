import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import size from "rollup-plugin-bundle-size";
import copy from "rollup-plugin-copy";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external({ includeDependencies: true }),
    url(),
    svgr(),
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/external-helpers"]
    }),
    resolve(),
    commonjs(),
    size(),
    copy({
      targets: [{ src: "src/styles/**/*", dest: "dist/styles" }]
    })
  ]
};
