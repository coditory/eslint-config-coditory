# Coditory eslint configuration

[![Travis Build](https://img.shields.io/travis/coditory/eslint-config-coditory.svg?style=flat-square)](https://travis-ci.org/coditory/eslint-config-coditory)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-coditory.svg?style=flat-square)](http://npm.im/eslint-config-coditory)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-coditory.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eslint-config-coditory&from=2015-08-01)

[Eslint](http://eslint.org/) configuration used in [Coditory](https://github.com/coditory).
It is an extension of well known [eslint-airbnb-config](https://github.com/airbnb/javascript).

This configuration does not use `peerDependencies`. it means that when you install `eslint-config-coditory` it will be installed with all its eslint plugins.

For more details on eslint shareable configuration see the [documentation](http://eslint.org/docs/developer-guide/shareable-configs).

## Sample usage

Create `.eslintrc` in project root directory and add:

```yaml
extends: coditory
```

For [koa](http://koajs.com/) based project use specific configuration:

```yaml
extends: 'coditory/koa'
```

## Different configurations

- `index` - Use it for any [es6](http://es6-features.org/) projects.
- `base` - Use it for [node.js](https://nodejs.org/) projects. Does not include react and other plugins.
- `react` - Use it for [react](https://facebook.github.io/react/) projects.
- `koa` - Use it for [koa](http://koajs.com/) based projects.
