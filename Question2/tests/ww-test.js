module.exports = {
  "WW Test": function(browser) {
    const wwPage = browser.page.wwPage();
    wwPage.navigate();
    browser.verify.title("WW (Weight Watchers): Weight Loss & Wellness Help");
    wwPage.clickfindAStudioButton();
    browser.verify.title("Find WW Studios & Meetings Near You | WW USA");
    wwPage.enterSearchField(10011);
    wwPage.clickSearchButton();
    browser
      .waitForElementVisible(wwPage.elements.locationDistance, 60000)
      .getText(wwPage.elements.locationDistance, function(locationDistance) {
        console.log(locationDistance.value);
      });
    browser
      .waitForElementVisible(wwPage.elements.locationName, 60000)
      .getText(wwPage.elements.locationName, function(locationName) {
        let name = locationName.value;
        console.log(name);
        wwPage.clickLocationName();
        browser.expect
          .element(wwPage.elements.locationName)
          .text.to.equal(name);
      });
    browser
      .waitForElementVisible(wwPage.elements.hoursOfCurrentDay, 60000)
      .getText(wwPage.elements.hoursOfCurrentDay, function(hoursOfCurrentDay) {
        console.log(hoursOfCurrentDay.value);
      });
  }
};
