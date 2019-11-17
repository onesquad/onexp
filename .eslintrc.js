module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": ["plugin:prettier/recommended", "eslint:recommended", "plugin:react/recommended"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error", "always"],
    "prettier/prettier": ["error", { "trailingComma": "es5", "singleQuote": true }],
    "no-console": 2,
    "react/prop-types": 0
  }
};