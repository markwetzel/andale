import * as browser from "webextension-polyfill";

console.log("Extension loaded");

browser.commands.onCommand.addListener((command) => {
  console.log("Command:", command);

  if (command === "toggle-subtitles") {
    console.log("Toggling subtitles"); // Debugging message
    browser.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => {
        if (tabs.length > 0 && tabs[0].id !== undefined) {
          browser.tabs
            .sendMessage(tabs[0].id, { action: "toggleSubtitles" })
            .catch((err) => console.error("Error sending message:", err));
        }
      })
      .catch((err) => console.error("Error querying tabs:", err));
  }
});
