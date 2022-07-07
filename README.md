# Vue Static SFC Plugin for Vite

Serve `.vue` files as static assets

# Installation

```sh
npm install vite-plugin-vue-static-sfc
```

# Usage

```js
// vite.config.js

import staticVuePlugin from 'vite-plugin-vue-static-sfc';
// require('vite-plugin-vue-static-sfc') is also supported

export default {
  plugins: [
    staticVuePlugin()
  ]
};

```

# Why
I've created a static website ([a typing game for kids](https://github.com/arikw/kids-keyboard-game)) that avoids build tools and uses [vue3-sfc-loader](https://www.npmjs.com/package/vue3-sfc-loader) to process `.vue` files dynamically at runtime.

While developing, I wanted to use [Vite](https://www.npmjs.com/package/vite) as an http server to serve the website and leverage its hot reloading, but it tried to process `.vue` files and requested to install a dedicated plugin to do so.

I just wanted Vite to serve the `.vue` files as if they were simple text files.

With this plugin, Vite will do that.

# Notice
* The HMR will reload the entire webpage if a change in a `.vue` file is detected
