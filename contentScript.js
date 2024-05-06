// Define patterns to match against URLs
const blockedPatterns = [
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*"
  ];
  
  // Remove elements that match the patterns
  function removeAds() {
    blockedPatterns.forEach(pattern => {
      let elements = document.querySelectorAll(pattern);
      elements.forEach(element => {
        element.remove();
      });
    });
  }
  
  // Run the function when the page loads
  removeAds();
