# ucsc-localist-silk-wrapper
This is the SILK WRAPPER for the [UC Santa Cruz Events Calendar](https://calendar.ucsc.edu/), hosted on the [Localist](https://www.localist.com/) platform.

## Features

- Modular CSS via Sass
- Task runner using gulp
- Bourbon and Neat

## Dependencies

- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)

## Install and build

Assuming you are working in a local development environment, clone this repository into your `/wp-content/themes/` directory.

### Install Node.js & NPM

#### Linux & Mac

The easiest way to install Node.js and npm on Linux or Mac is via [Linuxbrew](http://linuxbrew.sh/) or [Homebrew](https://brew.sh/), respectively. Installing Linuxbrew or Homebrew will handle downloading, unpacking, compiling and installing Node and NPM on your system in a few minutes.

```console
brew install node
```

#### Windows

There is no "Winbrew" available for Microsoft Windows. To install Node.js and NPM on Windows, download the Windows installer from the [Node.js website](https://nodejs.org/en/) and run the installer. Follow the prompts and accept the default settings.

#### Test it out

```console
node -v
v9.6.1
```

```console
npm -v
5.6.0
```

### Install the standalone `gulp-cli` package

_If you've previously installed gulp globally, run `npm rm --global gulp` before following these instructions._ For more information on the gulp standalone cli, read this [Sip](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467).

```console
npm install --global gulp-cli
```

### Install dependencies (Gulp, Bourbon, Neat, et al)

Now that you've installed NPM, use it to install the node modules in order to run gulp. The node modules are defined and included in the `package.json` file. To install node modules, type the following in your terminal:

```console
npm install
```

Wait several minutes for the installation to complete and you're in business!

## Gulp tasks

There are two Gulp tasks defined in the `gulpfile.js` file:

If there is no `style.css` file in this repo, the **gulp styles** task will build your `style.css` file based on the SASS files, which are located in `/assets/sass/`. This task will also created minified styles, saved as `styles.min.css`. If you make any changes to your `sass` files, you can regenerate your `style.css` and `style.min.css` files using this task command.

```console
gulp styles
```

The **gulp watch** task will continuously watch your `/assets/sass/` directory and rebuild your styles every time you save a SASS file.

```console
gulp watch
```

## Push to GitHub Pages

This SILK wrapper is hosted statically on GitHub on a branch called `gh-pages`.