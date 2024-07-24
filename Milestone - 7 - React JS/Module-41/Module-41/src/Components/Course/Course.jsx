import './Course.css'
import Cart from '../Cart/Cart'
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const Course = ({ course }) => {
    const [enrolled, setEnrolled] = useState({});
    // eslint-disable-next-line react/prop-types
    const { title, price } = course;
    return (
        <div>
            <div className="course_style">
                <h4>Title: {title}</h4>
                <h5>Price: {price}</h5>
                <button onClick={() => setEnrolled(course)}>Enroll Now</button>
            </div>

            {
                <Cart enrolled={enrolled}></Cart>
            }
        </div>
    );
};

export default Course;