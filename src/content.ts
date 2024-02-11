import * as browser from "webextension-polyfill";

browser.runtime.onMessage.addListener((message) => {
  console.log("Message received:", message);

  if (message.action === "toggleSubtitles") {
    toggleSubtitles(); // Implement this function based on your needs
  }
});

function toggleSubtitles() {
  // This is a placeholder function. You need to implement the logic
  // to toggle between English and Spanish subtitles based on the website's structure.
  // For example, if subtitles are toggled by changing a class name, implement that here.
  console.log(
    "Toggling subtitles - implement this function based on the site's subtitle handling."
  );
  toggleNetflixSubtitles();
}

function toggleNetflixSubtitles() {
  // This is a hypothetical function. You'll need to replace selectors based on the actual Netflix UI.
  // Open the subtitles menu
  const subtitlesButton = document.querySelector(
    ".inactive ltr-fntwn3"
  ) as HTMLElement;
  if (subtitlesButton) {
    subtitlesButton.click();

    // Wait for the menu to be visible
    setTimeout(() => {
      // Select the desired subtitle option
      const englishSubtitlesOption = document.querySelector(
        ".subtitles-list .english-option"
      ) as HTMLElement;
      if (englishSubtitlesOption) {
        englishSubtitlesOption.click();
      } else {
        console.log("English subtitles option not found");
      }
    }, 1000); // Adjust this timeout based on how long it typically takes for the menu to appear
  } else {
    console.log("Subtitles button not found");
  }
}
