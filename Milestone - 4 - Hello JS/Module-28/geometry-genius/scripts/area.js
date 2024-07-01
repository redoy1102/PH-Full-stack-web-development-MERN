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

function areaValidation(area) {
    if (isNaN(area) == false) {
        return true;
    }
    else {
        return false;
    }
}

function addToCalculationEntry(shapeName, area) {
    const calculationContainer = returnElement('calculation_container');
    const p = document.createElement('p');
    p.classList.add('my-5');
    p.classList.add('mx-5');

    const count = calculationContainer.childElementCount;

    p.innerHTML = `${count}. ${shapeName} - ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary">Convert to m<sup>2</sup></button>`;

    calculationContainer.appendChild(p);
}

function area(name, id1, id2) {
    if (name == 'triangle') {
        const triangleArea = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        if (areaValidation(triangleArea)){
            addToCalculationEntry(name, triangleArea);
        }
        else {
            console.log('Please type number.');
        }

        clearInput(id1, id2);
    }
    else if (name == 'rectangle') {
        const rectangleArea = parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        addToCalculationEntry(name, rectangleArea);

        clearInput(id1, id2);
    }
    else if (name == 'ellipse') {
        const ellipseArea = 3.1416 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        addToCalculationEntry(name, ellipseArea);
        clearInput(id1, id2);
    }
    else if (name == 'parallelogram') {
        const parallelogramArea = parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        addToCalculationEntry(name, parallelogramArea);
        

        clearInput(id1, id2);
    }
    else if (name == 'pentagon') {
        const pentagonArea = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        addToCalculationEntry(name, pentagonArea);

        clearInput(id1, id2);
    }
    else if (name == 'rhombus') {
        const rhombus = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        addToCalculationEntry(name, rhombus);

        clearInput(id1, id2);
    }
}