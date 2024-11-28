// Get elements
const imageUploader = document.getElementById('imageUploader');
const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const outputDisplay = document.getElementById('output');

// Load and display the image
imageUploader.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/png') {
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // Resize canvas to match the image
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid PNG image.');
    }
});

// Calculate distance and output DamageOffset
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Calculate center coordinates
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Calculate distances
    const distanceX = Math.round(clickX - centerX); // Right is positive, left is negative
    const distanceY = Math.round(clickY - centerY); // Bottom is positive, top is negative

    // Generate output string
    const damageOffset = `DamageFireOffsetN=${distanceX},${distanceY}`;
    
    // Display result

    document.getElementById("copy").innerHTML = 'Copy to Clipboard'
    outputDisplay.textContent = damageOffset;
});
