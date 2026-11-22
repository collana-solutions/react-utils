import type { Linter } from "eslint";
import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";

// rpt2 emits a declaration for this file. Without the explicit type, TypeScript names the
// inferred type through a path inside the pnpm store and fails with TS2742.
const config: Linter.Config[] = [
  {
    // The Dependabot changeset script is copied from the release playbook and kept as it is there.
    ignores: ["vite.config.ts", "scripts/generate-dependabot-changeset.mjs"],
  },
  ...neolutionEslintConfig.configs.flat.getConfig({
    ...neolutionEslintConfig.configs.flat.defaults["react-library"],
    cypressRecommended: true,
  }),
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["src/**"],
              message: "Use relative import path instead.",
            },
            {
              group: ["**/../src/**"],
              message: "Do not reach the 'src' folder in a relative path.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["**/cypress/**"],
    rules: {
      "@typescript-eslint/no-namespace": [
        "error",
        {
          allowDeclarations: true,
          allowDefinitionFiles: true,
        },
      ],
    },
  },
  {
    files: ["eslint.config.ts"],
    rules: {
      "unicorn/prefer-module": "off",
    },
  },
  {
    files: ["**/*.cy.tsx"],
    rules: {
      "no-restricted-imports": "off",
    },
  },
];

export default config;
