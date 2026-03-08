import js from "@eslint/js";
import globals from "globals";

export default [
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { 
      // Mude de globals.browser para globals.node
      globals: {
        ...globals.node, 
        ...globals.browser // Se quiser manter suporte a browser também
      } 
    } 
  },
  { 
    files: ["**/*.js"], 
    languageOptions: { sourceType: "commonjs" } 
  },
];