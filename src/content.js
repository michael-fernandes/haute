chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text) {
    fetch('http://localhost:5000/format', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: request.text })
    })
    .then(response => response.json())
    .then(data => {
      const formattedText = data.formattedText;
      // Replace the selected text with the formatted text
      document.execCommand('insertText', false, formattedText);
    })
    .catch(error => console.error('Error:', error));
  }
});
