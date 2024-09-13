
const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:60000,
    pageLoadTimeout:60000, 
    retries:{openMode:2},
    chromeWebSecurity : false,
    watchForFileChanges:true,
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      allureWriter(on, config);
            return config;
      
          
      // implement node event listeners here
    },
  },
});
