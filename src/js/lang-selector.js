document.addEventListener('DOMContentLoaded', () => {
  // Get the current page's filename (e.g., "index.html")
  const fileName = window.location.pathname.split('/').pop() || 'index.html';

  // Find the lang-selector div
  const langSelector = document.querySelector('.lang-list');

  if (langSelector) {
    // Create English link
    const enLink = document.createElement('a');
    enLink.href = `https://ra2be.com/${fileName}`;
    enLink.textContent = 'EN';
    
    // Create Chinese link
    const zhLink = document.createElement('a');
    zhLink.href = `https://ra2be.com/zh/${fileName}`;
    zhLink.textContent = '中';

    // Append links to lang-selector div
    langSelector.appendChild(enLink);
    langSelector.appendChild(zhLink);
  } else {
    console.warn('No element with class "lang-selector" found.');
  }
});