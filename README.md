# use_vitest
Basic example of how to use the Vitest for JavaScript Unit Testing

## Vitest

Vitest is a framework agnostic alternative to Jest.

### Features

1. Hot Module Reload
2. Optimizations with Vite

## Get Started

1. Initialize package.json
    - `$ npm init -y`
2. Install Vite & Vitest
    - `$ npm install -D vite`
    - `$ npm install -D vitest`
    - The -D flag is short for --save-dev, which indicates that package is only needed for development.
3. Add vistest script to package.json:
```json
  "scripts": {
    "test": "vitest"
  },
```
4. Create Test files
    - For example: math.test.mjs
5. Run Test:
    - `$ npm run test` or
    - `$ npx vitest`

