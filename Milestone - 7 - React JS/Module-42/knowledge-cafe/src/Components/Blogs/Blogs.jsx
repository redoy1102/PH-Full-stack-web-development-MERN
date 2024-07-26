// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import './Blogs.css'
import Blog from "../Blog/Blog.jsx";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmarkTitles, setBookmarkTitles] = useState([])
    const [bookmarkTotalDuration, setBookmarkTotalDuration] = useState(0)
    console.log(blogs);
    
    //! fetching the data from the api
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBookmarkChange = (blogTitle) => {
        setBookmarkTitles([...bookmarkTitles, blogTitle])
    }

    const handleBookmarkTotalDurationChange = (bookMarkReadDuration) => {
        console.log(typeof bookMarkReadDuration)
        setBookmarkTotalDuration((bookmarkTotalDuration) => bookmarkTotalDuration + Number(bookMarkReadDuration))
    }

    return (
        <div className='grid grid-cols-12 gap-6'>
            {/*blog posts container*/}
            <div className='col-span-8'>
                {
                    blogs.map(blog => <Blog blog={blog} handleBookmarkChange={handleBookmarkChange} handleBookmarkTotalDurationChange={handleBookmarkTotalDurationChange} key={blog.id}></Blog>)
                }
            </div>

            {/*bookmark container*/}
            <div className='col-span-4'>
                <h1>Spent time on read : {bookmarkTotalDuration}</h1>

                <div>
                    <h1>Bookmarked Blogs : {bookmarkTitles.length}</h1>
                </div>

                {/*total time to read the blogs of bookmarked blogs*/}
                {bookmarkTitles.map((bookmarkTitle, index) => (<h1 key={index}>{bookmarkTitle}</h1>))}
            </div>
        </div>
    );
};

export default Blogs;