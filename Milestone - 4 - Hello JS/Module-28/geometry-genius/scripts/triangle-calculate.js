function clearInput(x, y) {
    x.value = '';
    y.value = '';
}

document.getElementById('btn_triangle').addEventListener('click', function () {
    const baseTriangle = document.getElementById('base_triangle');
    const heightTriangle = document.getElementById('height_triangle');

    const triangleArea = 0.5 * parseFloat(baseTriangle.value) * parseFloat(heightTriangle.value);
    console.log(triangleArea);

    clearInput(baseTriangle, heightTriangle);
})