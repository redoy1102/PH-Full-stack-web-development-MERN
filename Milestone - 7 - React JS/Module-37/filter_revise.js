const data = {
    courses: [
        { title: 'C Programming Private Batch', price: 1530, seat: 20 },
        { title: 'Python with intro to Machine Learning private batch', price: 1730, seat: 20 },
        { title: 'C++ Programming Private Batch', price: 1630, seat: 20 },
        { title: 'C++ Programming Private Batch', price: 1630, seat: 20 },
        { title: 'C++ Programming Private Batch', price: 1630, seat: 20 },
    ]
}

const sameCourseFee = data.courses.filter(course => course.price == 1630)

console.log(sameCourseFee);