import tailwindcss from "tailwindcss"
import postcssSass from "@csstools/postcss-sass"
import postcssPresetEnv from "postcss-preset-env"
import cssnano from "cssnano"

export default {
  plugins: [
    postcssSass,
    tailwindcss,
    postcssPresetEnv({
      stage: 3,
      minimumVendorImplementations: 2,
      browsers: "last 2 versions",
    }),
    cssnano,
  ],
};
