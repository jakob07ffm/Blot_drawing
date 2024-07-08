const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

drawLines([
    // House base
    [[0, 5], [125, 5]],
    [[40, 5], [40, 50]],
    [[40, 50], [85, 50]],
    [[85, 50], [85, 5]],
    
    // Roof
    [[40, 50], [62.5, 80]],
    [[62.5, 80], [85, 50]],

    // Door
    [[45, 5], [45, 20]],
    [[45, 20], [55, 20]],
    [[55, 20], [55, 5]],

    [[60, 10], [60, 20]],
    [[60, 20], [80, 20]],
    [[80, 20], [80, 10]],
    [[80, 10], [60, 10]],

    [[45, 30], [45, 40]],
    [[45, 40], [57, 40]],
    [[57, 40], [57, 30]],
    [[57, 30], [45, 30]],

    [[80, 30], [80, 40]],
    [[68, 40], [80, 40]],
    [[68, 40], [68, 30]],
    [[80, 30], [68, 30]],

    // Chimney
    [[70, 70], [70, 75]],
    [[70, 75], [75, 75]],
    [[75, 75], [75, 63]],
]);

drawLines(finalLines);
