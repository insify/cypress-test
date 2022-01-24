describe("Happy flow", () => {
    beforeAll( async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://localhost:3000/');
        await browser.waitForReact();
    });
    it("to do", async () => {
        browser.get('http://localhost:3000/');
    });
});
