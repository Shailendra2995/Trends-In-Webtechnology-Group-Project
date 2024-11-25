module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    // Customize rules as needed
    'no-unused-vars': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'prettier/prettier': 'warn'
  }
};