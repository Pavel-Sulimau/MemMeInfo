# MemMeInfo Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Last Commit](https://img.shields.io/github/last-commit/Pavel-Sulimau/MemMeInfo/master)
![Site Status](https://img.shields.io/website?url=https%3A%2F%2Fmemme.pasul.dev&up_message=online&down_message=offline&label=site)

Production site: https://memme.pasul.dev

MemMeInfo is a clean, mobile-first landing page built on top of Start Bootstrap New Age and adapted for the MemMeInfo product.

## Overview

- Single-page marketing site with supporting legal pages.
- Built with HTML, SCSS, and vanilla JavaScript (Bootstrap 5 runtime).
- Uses a small Gulp pipeline for compiling SCSS, minifying assets, and syncing vendor files.

## Tech Stack

- Bootstrap 5
- Font Awesome + Simple Line Icons
- SCSS
- Gulp 4

## Project Structure

- `index.html` — main landing page
- `privacy.html` — privacy policy
- `terms.html` — terms and conditions
- `scss/` — source styles
- `css/` — compiled styles
- `js/new-age.js` — source scripts
- `js/new-age.min.js` — compiled/minified script
- `vendor/` — third-party assets copied from `node_modules`

## Local Development

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run in watch mode

```bash
npm start
```

This runs the Gulp watch pipeline, serves the site locally with BrowserSync, and rebuilds assets on changes.

## Build Tasks

- `gulp build` — clean vendor, sync dependencies, compile SCSS, minify JS/CSS
- `gulp watch` — run build, start local server, and watch files
- `gulp css` — compile and minify styles only
- `gulp js` — minify JavaScript only

## Contribution Notes

- Make focused, minimal diffs.
- Edit source files first (`scss/**`, `js/new-age.js`, and HTML pages).
- Avoid manual edits in minified files and `vendor/**`; regenerate through Gulp.
- Keep UI behavior unchanged unless the task explicitly asks for it.

## License

This repository includes [MIT License](LICENSE).
