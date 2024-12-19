module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    'react/prop-types': 'off',
    'no-useless-catch': 'off' // Disable the no-useless-catch rule
    // Add other rules here as needed
  }
}
