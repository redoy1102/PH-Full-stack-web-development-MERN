// import { useState } from "react";
import Course from '../Course/Course'
import './Courses.css'


const Courses = () => {
    // const [names, setNames] = useState([]);

    const info = [
        { id: 1, title: 'C Programming', price: 730 },
        { id: 2, title: 'C++ Programming', price: 930 }
    ]

    return (
        <div>
            <h1>Courses</h1>
            <div className='courses_style'>
                {
                    info.map((course) => <Course course={course} key={course.id}></Course>)
                }
            </div>
        </div>

    );
};

export default Courses;