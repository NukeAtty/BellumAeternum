const imageInput = document.getElementById("imageInput");
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const pixelOutput = document.getElementById("primaryFirePixelOffset");
        const leptonOutput = document.getElementById("primaryFireFLH");

        let img = new Image();
        let centerX, centerY;
        let firstPoint = null;

        // Pixel-to-lepton ratios
        const xPixelToLepton = (512 * Math.sqrt(5) / 5) / 30;
        const yPixelToLepton = (256 * Math.sqrt(5) / 5) / 15;

        // Upload and display image
        imageInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    img.src = event.target.result;
                };
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    centerX = img.width / 2;
                    centerY = img.height / 2;
                    ctx.drawImage(img, 0, 0);
                };
                reader.readAsDataURL(file);
            }
        });

        // Handle canvas clicks
        canvas.addEventListener("click", (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            // First point: Calculate distance from image center
            if (!firstPoint) {
                firstPoint = { x: clickX, y: clickY };

                const xDist = Math.round(clickX - centerX);
                const yDist = Math.round(clickY - centerY); // Invert y-axis

                pixelOutput.textContent = `PrimaryFirePixelOffset=${xDist},${yDist}`;

                // Draw a red aim cross mark
                drawCrossMark(clickX, clickY);

            } else {
                // Second point: Calculate lepton distance from the first point
                const xDist = Math.round(Math.abs(clickX - firstPoint.x) * xPixelToLepton);
                const yDist = Math.round((firstPoint.y - clickY) * yPixelToLepton);

                leptonOutput.textContent = `PrimaryFireFLH=${xDist},0,${yDist}`;

                // Draw a red aim cross mark
                drawCrossMark(clickX, clickY);

                // Reset for future clicks
                firstPoint = null;
            }
        });

        // Helper function to draw a red aim cross mark
        function drawCrossMark(x, y) {
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.moveTo(x - 10, y);
            ctx.lineTo(x + 10, y);
            ctx.moveTo(x, y - 10);
            ctx.lineTo(x, y + 10);
            ctx.stroke();
        }