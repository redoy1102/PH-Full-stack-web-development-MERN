const batches = [
    {id: 1, title: 'C Programming Private Batch', price: 1530},
    {id: 2, title: 'C++ Private Batch', price: 1630},
    {id: 3, title: 'Python Private Batch', price: 1730}
]

const prices = batches.map(batch => batch.price);

console.log(prices);