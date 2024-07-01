function clearInput(x, y) {
    returnElement(x).value = '';
    returnElement(y).value = '';
}

function returnElement(id) {
    return document.getElementById(id);
}

function getTag(tagName) {
    if (tagName == 'p') {
        const p = document.createElement('p');
        p.classList.add('my-5');
        p.classList.add('mx-5');
        return p;
    }
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

function capitalizeFirstCharacter(string) {
    if (!string) {
        return string
    }
    else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

function addToCalculationEntry(shapeName, area) {
    shapeName = capitalizeFirstCharacter(shapeName);
    const calculationContainer = returnElement('calculation_container');
    const p = getTag('p');

    const count = calculationContainer.childElementCount;

    p.innerHTML = `${count}. ${shapeName} - ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary"> Convert to m<sup>2</sup> </button>`;

    calculationContainer.appendChild(p);
}

function setErrorMessage() {
    alert('Please type number.');
}

function area(name, id1, id2) {
    if (name == 'triangle') {
        const area = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        if (areaValidation(area)) {
            addToCalculationEntry(name, area);
            clearInput(id1, id2);
        }
        else {
            setErrorMessage();
        }
    }
    else if (name == 'rectangle') {
        const area = parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        if (areaValidation(area)) {
            addToCalculationEntry(name, area);
            clearInput(id1, id2);
        }
        else {
            setErrorMessage();
        }
    }
    else if (name == 'ellipse') {
        const area = 3.1416 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        if (areaValidation(area)) {
            addToCalculationEntry(name, area);
            clearInput(id1, id2);
        }
        else {
            setErrorMessage();
        }
    }
    else if (name == 'parallelogram') {
        const area = parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        if (areaValidation(area)) {
            addToCalculationEntry(name, area);
            clearInput(id1, id2);
        }
        else {
            setErrorMessage();
        }
    }
    else if (name == 'pentagon') {
        const area = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        if (areaValidation(area)) {
            addToCalculationEntry(name, area);
            clearInput(id1, id2);
        }
        else {
            setErrorMessage();
        }
    }
    else if (name == 'rhombus') {
        const area = 0.5 * parseFloat(returnValue(id1)) * parseFloat(returnValue(id2));
        if (areaValidation(area)) {
            addToCalculationEntry(name, area);
            clearInput(id1, id2);
        }
        else {
            setErrorMessage();
        }
    }
}