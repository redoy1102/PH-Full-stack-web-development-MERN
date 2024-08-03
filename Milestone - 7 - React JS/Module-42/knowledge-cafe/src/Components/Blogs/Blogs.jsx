// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import './Blogs.css'
import Blog from "../Blog/Blog.jsx";
import axios from "axios";
import { ColorRing } from 'react-loader-spinner'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmarkTitles, setBookmarkTitles] = useState([])
    const [bookmarkTotalDuration, setBookmarkTotalDuration] = useState(0)
    const [showSpinner, setShowSpinner] = useState(true)
    const [showSpinnerBookmark, setShowSpinnerBookmark] = useState(false)
    console.log(blogs);

    //! fetching the data from the api using useEffect
    // useEffect(() => {
    //     fetch('blog.json')
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    // }, [])

    //! fetching the data from the api using axios
    axios.get('blog.json')
        .then(response => (setBlogs(response.data), setShowSpinner(false)))

    const handleBookmarkChange = (blogTitle) => {
        setBookmarkTitles([...bookmarkTitles, blogTitle])
        setShowSpinnerBookmark(false)
    }

    const handleBookmarkTotalDurationChange = (bookMarkReadDuration) => {
        console.log(typeof bookMarkReadDuration)
        setBookmarkTotalDuration((bookmarkTotalDuration) => bookmarkTotalDuration + Number(bookMarkReadDuration))
    }

    const handleSetShowSpinnerBookmark = () =>{
        setShowSpinnerBookmark(true)
    }

    return (
        <div className='grid grid-cols-12 gap-6'>
            {/*blog posts container*/}
            <div className='col-span-8'>
                {/* spinner  */}
                <div className='flex justify-center items-center'>
                    {
                        showSpinner && <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    }
                </div>
                {
                    blogs.map(blog => <Blog blog={blog} handleBookmarkChange={handleBookmarkChange} handleBookmarkTotalDurationChange={handleBookmarkTotalDurationChange} handleSetShowSpinnerBookmark={handleSetShowSpinnerBookmark} key={blog.id}></Blog>)
                }
            </div>

            {/*bookmark container*/}
            <div className='col-span-4'>
                <h1>Spent time on read : {bookmarkTotalDuration}</h1>

                <div>
                    <h1>Bookmarked Blogs : {bookmarkTitles.length}</h1>
                </div>

                {
                    showSpinnerBookmark && <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                }

                {/*total time to read the blogs of bookmarked blogs*/}
                {bookmarkTitles.map((bookmarkTitle, index) => (<h1 key={index}>{bookmarkTitle}</h1>))}
            </div>
        </div>
    );
};

export default Blogs;