let cwr = {
    name: "Code with Redoy",
    phone: "01621025110",
    website: "cutt.l"
}

let shopping_card = {
    book: 10,
    pen: 5,
    soup: 1,
    fruits: 2
}

sum = 0
for (let k in shopping_card) {
    sum += shopping_card[k]
}
console.log(sum)