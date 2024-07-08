const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];


drawLines([
    [[0, 5], [125, 5]],
    [[40, 5], [40, 50]],
    [[40, 50], [85, 50]],
    [[85, 50], [85, 5]],
    [[40, 50], [62.5, 80]],
    [[62.5, 80], [85, 50]],
    [[45, 5], [45, 20]],
    [[45, 20], [55, 20]],
    [[55, 20], [55, 5]]
])


drawLines(finalLines);
