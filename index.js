const width = 125;
const height = 125;
setDocDimensions(width, height);

const numCols = 10;
const numRows = 10;
const maxCircleSize = 10;
const minCircleSize = 2;

function drawCircle(cx, cy, radius, color) {
    let path = [];
    const steps = 50;
    for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * Math.PI * 2;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        path.push([x, y]);
    }
    return { path, color };
}

let grid = [];
const colWidth = width / numCols;
const rowHeight = height / numRows;

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        const cx = col * colWidth + colWidth / 2 + bt.randInRange(-2, 2);
        const cy = row * rowHeight + rowHeight / 2 + bt.randInRange(-2, 2);

        const radius = bt.randInRange(minCircleSize, maxCircleSize) * (1 + col / numCols) * (1 + row / numRows);

        const color = `rgb(${Math.floor(255 * col / numCols)}, ${Math.floor(255 * row / numRows)}, 150)`;
        
        const circle = drawCircle(cx, cy, radius, color);
        grid.push(circle);
    }
}

function animateGrid(grid) {
    let time = 0;
    function animate() {
        time += 0.05;
        let animatedGrid = grid.map(circle => {
            let { path, color } = circle;
            let newPath = path.map(([x, y]) => {
                let dx = (Math.random() - 0.5) * 0.5;
                let dy = (Math.random() - 0.5) * 0.5;
                return [x + dx * Math.sin(time), y + dy * Math.sin(time)];
            });
            return { path: newPath, color };
        });
        drawLines(animatedGrid, time);
        requestAnimationFrame(animate);
    }
    animate();
}

animateGrid(grid);
