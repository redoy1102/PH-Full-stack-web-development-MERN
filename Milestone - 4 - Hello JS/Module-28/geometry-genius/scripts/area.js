function clearInput(x, y) {
    returnElement(x).value = '';
    returnElement(y).value = '';
}

function returnElement(id) {
    return document.getElementById(id);
}

function returnValue(id) {
    let element = returnElement(id);
    return element.value;
}


function area(name, id1, id2) {
    if (name == 'triangle') {
        const triangleArea = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        console.log(triangleArea);

        clearInput(id1, id2);
    }
    else if (name == 'rectangle') {
        // console.log('clicked')
        const rectangleArea = parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        console.log(rectangleArea);

        clearInput(id1, id2);
    }
    else if (name == 'ellipse') {
        const ellipseArea = 3.1416 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        console.log(ellipseArea);

        clearInput(id1, id2);
    }
    else if (name == 'parallelogram') {
        const parallelogramArea = parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        console.log(parallelogramArea);

        clearInput(id1, id2);
    }
    else if (name == 'pentagon') {
        const pentagonArea = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        console.log(pentagonArea);

        clearInput(id1, id2);
    }
    else if (name == 'rhombus') {
        const pentagonArea = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        console.log(pentagonArea);

        clearInput(id1, id2);
    }
}