exports.config = {
    directConnect: true,
    allScriptsTimeout: 50000,
    specs: ['protractor/e2e/flow.js'],
    plugins: [
        {
            package: "protractor-react-selector"
        }
    ],
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
    }
  }