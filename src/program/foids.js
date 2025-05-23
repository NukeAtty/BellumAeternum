const imageUpload = document.getElementById('imageUpload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const reloadButton = document.getElementById('reload');
const copyButton = document.getElementById('copy');
const outputDiv = document.getElementById('output');
const maxWidth = 800;  // 最大允许宽度
const maxHeight = 600; // 最大允许高度

let image = new Image();
let points = [];

imageUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file && file.type === 'image/png') {
    const reader = new FileReader();
    reader.onload = () => {
      image.src = reader.result;
      image.onload = () => {
        if (image.width > maxWidth || image.height > maxHeight) {
          alert("Image should not over 800*600.");
          imageUpload.value = '';  // 清空文件选择
          return;  // 终止后续执行
        }
        
        canvas.width = image.width;
        canvas.height = image.height;
        drawImageWithPoints();
      };
    };
    reader.readAsDataURL(file);
  }
});

canvas.addEventListener('click', (event) => {
  if (!image.src) return;

  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const offsetX = Math.round(x - centerX);
  const offsetY = Math.round(y - centerY);

  const point = { x, y, offsetX, offsetY };
  points.push(point);

  // Append to output
  const label = document.createElement('label');
  label.textContent = `DamageFireOffset${points.length - 1}=${offsetX},${offsetY}`;
  label.dataset.index = points.length - 1;
  label.addEventListener('click', () => deletePoint(label.dataset.index));
  outputDiv.appendChild(label);

  drawImageWithPoints();
});

reloadButton.addEventListener('click', () => {
  if (image.src) {
points = [];
outputDiv.innerHTML = '';
drawImageWithPoints();
  }
});

function resumeCopy(){
  document.getElementById('copy').innerHTML = "Copy to Clipboard"
}

copyButton.addEventListener('click', () => {
  const text = points
.map((point, index) => `DamageFireOffset${index}=${point.offsetX},${point.offsetY}`)
.join('\n');
  navigator.clipboard.writeText(text).then(() => {
document.getElementById('copy').innerHTML = "Copied!"
setTimeout(resumeCopy, 1000);
  });
});

function deletePoint(index) {
  points.splice(index, 1);
  redrawLabels();
  drawImageWithPoints();
}

function redrawLabels() {
  outputDiv.innerHTML = '';
  points.forEach((point, index) => {
const label = document.createElement('label');
label.textContent = `DamageFireOffset${index}=${point.offsetX},${point.offsetY}`;
label.dataset.index = index;
label.addEventListener('click', () => deletePoint(label.dataset.index));
outputDiv.appendChild(label);
  });
}

function drawImageWithPoints() {
  if (!image.src) return;

  // Clear and redraw the image
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);

  // Draw all points
  points.forEach((point, index) => {
    ctx.strokeStyle = '#ffff00';
    ctx.beginPath();
    ctx.moveTo(point.x - 5, point.y);
    ctx.lineTo(point.x + 5, point.y);
    ctx.moveTo(point.x, point.y - 5);
    ctx.lineTo(point.x, point.y + 5);
    ctx.stroke();
    ctx.shadowColor = "#ff0000"
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 2;

    // Draw index with shadow
    ctx.fillStyle = '#ffff00';
    ctx.font = '14px Neon';
    ctx.shadowColor = '#ff0000';
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 2;
    ctx.fillText(index, point.x + 5, point.y - 5);
  });
}