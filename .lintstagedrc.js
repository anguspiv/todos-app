export default {
  '*.{ts,tsx,js,jsx}': ['prettier --write', 'eslint --fix', 'tsc-files --noEmit'],
};
