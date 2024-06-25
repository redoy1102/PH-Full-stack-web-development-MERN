const unOrderList = document.getElementById('ul');
const lengthLi = unOrderList.getElementsByTagName('li');
console.log(lengthLi);
console.log(lengthLi.length);
const newLi = document.createElement('li');
newLi.innerText = "Course-6";
unOrderList.appendChild(newLi);

let i = 0;
function numbers() {
    console.log(i + 1);
    i++;
}

const makeRedBtn = document.getElementById('btn');
makeRedBtn.addEventListener('click', 
    function red() {
        document.body.style.backgroundColor = 'Red';
    }
);

document.getElementById('blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})

document.getElementById('updateBtn').addEventListener('click', function () {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;

    const title = document.getElementById('title');
    // console.log(title);
    title.innerText = inputValue;

    inputField.value = '';
})