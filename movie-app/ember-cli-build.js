'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const config = require('./config/environment');

module.exports = async function (defaults) {
  const app = new EmberApp(defaults, {
    sourcemaps: {
      enabled: config.environment === 'development',
      extensions: ['js'],
    },
  });

  const { setConfig } = await import('@warp-drive/build-config');
  setConfig(app, __dirname, {
    deprecations: {
      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
    },
  });

  const assets = [
    {
      development: 'node_modules/bootstrap/dist/css/bootstrap.css',
      production: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
    },
    {
      development: 'node_modules/bootstrap/dist/js/bootstrap.js',
      production: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
    },
  ];

  assets.forEach((asset) => {
    app.import(asset[EmberApp.env()]);
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticInvokables: true,
    staticEmberSource: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
