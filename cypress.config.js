const { defineConfig } = require('cypress')

//For Cypress file Download
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

//For Adding Tags to Tests
const selectTestsWithGrep = require('cypress-select-tests/grep')

//For cucumber integration
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { downloadFile }); //Cypress file Download
      on('file:preprocessor', selectTestsWithGrep(config)); //Adding Tags to Tests
      on('file:preprocessor', cucumber()); //For cypress cucumber preprocessor
      on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
      require('cypress-grep/src/plugin')(config); return config //For cypress-grep to add tags to test
    },
  },
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: 1,
  reporter: '../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  projectId: 'd5zibb',
  experimentalStudio: true,
  env: {
    db: {
      host: 'localhost',
      user: 'root',
      password: 'Br0wserStack!',
      database: 'classicmodels',
    },
  },
})
