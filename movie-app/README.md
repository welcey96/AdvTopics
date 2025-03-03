# movie-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd movie-app`
- `npm install`

## Running / Development

- `npm run start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `npm run test`
- `npm run test:ember -- --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `npm exec ember build` (development)
- `npm run build` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Project setup
`npx -p ember-cli ember new movie-app --embroider`

## Configure ember-cli.build.js to remove deprecation warnings
- Setting 'staticComponents' is deprecated. Use 'staticInvokables' instead
- Setting 'staticHelpers' is deprecated. Use 'staticInvokables' instead
- Setting 'staticModifiers' is deprecated. Use 'staticInvokables' instead

`staticInvokables: true,`

## Install bootstrap and import to project 
`npm i boostrap`
- Import boostrap inside ember-cli.build.js
`app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');`
`app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');`

## Add sourcemap for debugging purposes on dev 
- ember-cli.build.js
`sourcemaps: {
      enabled: config.environment === 'development',
      extensions: ['js'],
    },`