import react from '@woohm402/eslint-config-react';

export default [
  {
    ignores: ['.yarn', '*.tsx'],
  },
  ...react({
    tsconfigRootDir: import.meta.dirname,
  }),
];
