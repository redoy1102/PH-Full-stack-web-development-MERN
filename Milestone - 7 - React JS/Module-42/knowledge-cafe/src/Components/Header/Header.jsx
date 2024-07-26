import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
                <img className='w-14 h-14' src="https://i.imgur.com/jivPWYM.png" alt="" />
            </div>
            <hr className='border-slate-200 border-2 my-8' />
        </div>
    );
};

export default Header;