import React from 'react';
import {useLoaderData} from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData()
    console.log(phone)

    const {id,name, image} = phone;
    return (
        <div>
            <p>{id}</p>
            <h1>{name}</h1>
            <img src={image} alt=""/>
        </div>
    );
};

export default Phone;