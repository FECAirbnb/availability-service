/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: './node_modules/eslint-config-hackreactor/index.js',
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  },
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  },
  "env": {
    "browser": true,
    "node": true
  }
};