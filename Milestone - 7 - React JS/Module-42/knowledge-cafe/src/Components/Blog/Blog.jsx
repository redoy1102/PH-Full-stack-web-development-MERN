// import React from 'react';
import './Blog.css'

const Blog = ({ blog, handleBookmarkChange, handleBookmarkTotalDurationChange }) => {
    const {id, banner, authorName, authorPic, publishDate, readDuration, title, hashtag
    } = blog
    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl mb-10">
                <figure>
                    <img
                        src={banner}
                        alt="Blog banner"/>
                </figure>
                <div className="card-body">

                    {/*author card*/}
                    <div className='flex justify-between items-center mt-8'>
                        {/*left side*/}
                        <div className='flex justify-start items-center gap-4'>
                            {/*image*/}
                            <div>
                                <img className='w-14 h-14' src={authorPic} alt="Author image"/>
                            </div>

                            {/*name and publish date*/}
                            <div>
                                <h1 className='font-bold text-2xl'>{authorName}</h1>
                                <p className='font-semibold text-base'>{publishDate}</p>
                            </div>
                        </div>


                        {/*right side*/}
                        <div className='flex items-center flex-wrap gap-2'>
                            <p className='font-medium text-xl'>{readDuration} min read</p>
                            <button onClick={() => (handleBookmarkChange(title), handleBookmarkTotalDurationChange(readDuration))}><i className="font-medium text-xl fa-regular fa-bookmark"></i></button>
                        </div>
                    </div>

                    <h1 className='font-bold text-4xl my-4'>{title}</h1>

                    <div className='flex flex-wrap gap-2'>
                        {hashtag.map((tag, index) => <span className='font-medium text-xl text-slate-400' key={index}>{tag}</span>)}
                    </div>
                    <a className='text-sm text-[#6047EC] underline' href="">Mark as read</a>
                </div>
            </div>

        </div>
    );
};

export default Blog;