const width = 125;
const height = 125;
setDocDimensions(width, height);

const numCols = 10;
const numRows = 10;
const maxCircleSize = 10;
const minCircleSize = 2;
const apiKey = "key";
const city = "frankfurt am Main";

function drawCircle(cx, cy, radius) {
    let path = [];
    const steps = 50;
    for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * Math.PI * 2;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        path.push([x, y]);
    }
    return path;
}

async function getWeather() {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();
    return data.main.temp;
}

async function drawGrid() {
    const temp = await getWeather();
    const tempRange = [0, 40]; 
    const grid = [];
    const colWidth = width / numCols;
    const rowHeight = height / numRows;

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const cx = col * colWidth + colWidth / 2;
            const cy = row * rowHeight + rowHeight / 2;
            
          
            const radius = minCircleSize + (maxCircleSize - minCircleSize) * ((temp - tempRange[0]) / (tempRange[1] - tempRange[0]));
            
            const circle = drawCircle(cx, cy, radius);
            grid.push(circle);
        }
    }

  
    grid.forEach(circle => {
        bt.originate(circle); 
        bt.scale(circle, radius / 5); 
    });

    drawLines(grid);
}

drawGrid(); 
