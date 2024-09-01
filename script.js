// const canvas = document.getElementById('drawingCanvas');
// const ctx = canvas.getContext('2d');
// let isDrawing = false;

// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }


// resizeCanvas();


// function getRandomInRange(min, max) {
//   return Math.random() * (max - min) + min;
// }


// function getRandomBrownColor() {
//   const r = getRandomInRange(100, 150);
//   const g = getRandomInRange(50, 100);
//   const b = getRandomInRange(20, 70);
//   return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
// }


// canvas.addEventListener('mousedown', (e) => {
//   isDrawing = true;
//   ctx.beginPath();
//   ctx.moveTo(e.clientX, e.clientY);
// });

// canvas.addEventListener('mousemove', (e) => {
//   if (isDrawing) {
//     ctx.strokeStyle = getRandomBrownColor(); 
//     ctx.lineWidth = getRandomInRange(9, 19); 
//     ctx.lineJoin = 'round';
//     ctx.lineCap = 'round';
//     ctx.globalAlpha = getRandomInRange(0.5, 0.9);
//     ctx.lineTo(e.clientX, e.clientY);
//     ctx.stroke();
//   }
// });

// canvas.addEventListener('mouseup', () => {
//   isDrawing = false;
//   ctx.closePath();
// });


// window.addEventListener('resize', resizeCanvas);
