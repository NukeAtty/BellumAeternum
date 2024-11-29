        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const imageUpload = document.getElementById('imageUploader');
        const coordinatesDiv = document.getElementById('output');
        const copyBtn = document.getElementById('copy');

        let image = new Image();
        let imageCenter = { x: 0, y: 0 };
        let dotIndex = 0;
        const dots = [];

        // Load image onto canvas when user selects a file
        imageUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type === 'image/png') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    image.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        // Once the image is loaded, set the canvas size and draw the image
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous content
            ctx.drawImage(image, 0, 0);
            imageCenter = { x: canvas.width / 2, y: canvas.height / 2 };
            ctx.drawImage(image, 0, 0);
        };

        // Disable clicking on canvas if no image is uploaded
        canvas.addEventListener('click', (e) => {
            if (!image.src) return;  // No image uploaded, do nothing

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate the distance from the center
            const offsetX = Math.round(x - imageCenter.x);
            const offsetY = Math.round(y - imageCenter.y);

            // Draw a red aim at the clicked position (3x3 dot)
            ctx.fillStyle = 'red';
            ctx.fillRect(x - 1.5, y - 1.5, 3, 3);

            // Generate label with coordinates
            const label = document.createElement('div');
            label.classList.add('coordinate-label');
            label.innerHTML = `<div class="coordinate-label-left">DamageFireOffset${dotIndex} = ${offsetX},${offsetY}</div>
                <span id="deleter" class="close-btn" onclick="removeDot(${dotIndex})"></span>`;
            coordinatesDiv.appendChild(label);

            // Store the dot and its coordinates
            dots.push({ index: dotIndex, x: offsetX, y: offsetY, label: label });

            dotIndex++;
        });

        // Remove dot and label
        function removeDot(index) {
            const dot = dots.find(dot => dot.index === index);
            if (dot) {
                // Remove dot from canvas (clear small 3x3 area)
                ctx.clearRect(imageCenter.x + dot.x - 1.5, imageCenter.y + dot.y - 1.5, 3, 3);
                // Remove label
                coordinatesDiv.removeChild(dot.label);
                // Remove from dots array
                const dotIndex = dots.indexOf(dot);
                if (dotIndex > -1) {
                    dots.splice(dotIndex, 1);
                }
            }
        }

        // Copy all labels content to clipboard
        copyBtn.addEventListener('click', () => {
            let textContent = dots.map(dot => {
                return `DamageFireOffset${dot.index} = ${dot.x},${dot.y}`;
            }).join('\n');
            navigator.clipboard.writeText(textContent).then(() => {
                document.getElementById('copy').innerHTML = "Copied !"
            }).catch((err) => {
                alert('Failed to copy: ' + err);
            });
        });