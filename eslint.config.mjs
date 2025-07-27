import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // CommonJS 파일에 대한 특별 설정
    files: ['**/*.cjs'],
    rules: {
      // require 구문 사용 허용
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];

export default eslintConfig;
