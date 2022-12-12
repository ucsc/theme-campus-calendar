# ucsc-localist-silk-wrapper

This is the SILK WRAPPER for the [UC Santa Cruz Events Calendar](https://calendar.ucsc.edu/), hosted on the [Localist](https://www.localist.com/) platform.

## Dependencies

- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/)

## Install and build

Clone repo locally, `cd` into it and run `npm install`.

[Webpack](https://webpack.js.org/) is used to compile `html`, `js`, and `css` from the `src/` to the `dist/` directory. Final code is deployed from the `dist/` directory.

**scripts:** the `package.json` has three scripts:

- `start` starts the webserver serving from the `dist` directory
- `build` builds the source files into the `dist` directory
- `build-watch` watches the source files for changes and automatically builds

## Master vs Dev branches

Master branch is hosted on Netlify and dev branches are hosted on Github Pages
