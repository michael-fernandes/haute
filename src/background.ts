chrome.commands.onCommand.addListener((command) => {
  if (command === "format-text") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: formatSelectedText
      });
    });
  }
});

function formatSelectedText() {
  const selection = window.getSelection().toString();
  if (selection) {
    // Send the selected text to the content script for processing
    chrome.runtime.sendMessage({ text: selection });
  }
}
