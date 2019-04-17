module.exports = {
  url: function() {
    return "https://www.weightwatchers.com/us/";
  },
  elements: {
    findAStudioButton: "#ela-menu-visitor-desktop-supplementa_find-a-studio",
    searchField: "#meetingSearch",
    searchButton: "button.spice-translated",
    locationName: ".location__name",
    locationDistance: ".location__distance",
    hoursOfCurrentDay: ".hours-list--currentday"
  },
  commands: {
    clickfindAStudioButton() {
      this.waitForElementVisible("@findAStudioButton", 60000).click(
        "@findAStudioButton"
      );
    },
    enterSearchField(search) {
      return this.waitForElementVisible("@searchField", 60000).setValue(
        "@searchField",
        search
      );
    },
    clickSearchButton() {
      this.waitForElementVisible("@searchButton", 60000).click("@searchButton");
    },
    clickLocationName() {
      this.waitForElementVisible("@locationName", 60000).click("@locationName");
    }
  }
};
