const babel = require("rollup-plugin-babel");
// const postcss = require("rollup-plugin-postcss");
const resolve = require("rollup-plugin-node-resolve");
const external = require("rollup-plugin-peer-deps-external");
const { terser } = require("rollup-plugin-terser");

module.exports = [
    {
        input: "src/index.js",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            // postcss({
            //     plugins: [],
            //     minimize: true,
            // }),
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
            }),
            external(),
            terser(),
            resolve(),
        ],
    },
];
