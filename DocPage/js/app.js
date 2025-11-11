// --- Configuration: Tell marked.js to use the alert extension ---
// The markedAlert function is now globally available because we loaded its UMD script.
marked.use(markedAlert());
// -----------------------------------------------------------------


// Function to load and render Markdown (same as before, but now with alerts!)
function loadMarkdown(filePath) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = 'Loading document...'; 

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(markdownText => {
            // Convert Markdown to HTML using marked.js (which now uses the alert extension)
            const htmlContent = marked.parse(markdownText);
            contentArea.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error("Error loading Markdown:", error);
            contentArea.innerHTML = `<p style="color: red;">Error: Could not load document. ${error.message}</p>`;
        });
}

window.toggleNavFolder = function(buttonElement) {
    // 1. Get the parent folder <li>
    const folderItem = buttonElement.closest('.nav-folder');
    
    // 2. Find the sub-list <ul> within that folder <li>
    const sublist = folderItem.querySelector('.nav-sublist');
    
    // 3. Toggle the 'hidden' class on the sub-list
    if (sublist) {
        sublist.classList.toggle('hidden');
        
        // Optional: Change the button/icon visually to indicate state
        buttonElement.classList.toggle('is-open'); 
    }
};

// Attach a delegated click listener to the navigation for HTMX-loaded links
document.body.addEventListener('click', function(event) {
    // Check if the clicked element or its parent is an anchor tag with a data-markdown-src
    let targetLink = event.target.closest('a[data-markdown-src]');
    if (targetLink) {
        event.preventDefault(); // Prevent default link behavior
        const markdownSrc = targetLink.getAttribute('data-markdown-src');
        loadMarkdown(markdownSrc);

        // Optional: Update active class for styling the current nav item
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        targetLink.classList.add('active');
    }
});