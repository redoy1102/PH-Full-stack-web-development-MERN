import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import phone from "./Phone.jsx";
import Phone from "./Phone.jsx";

const Phones = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
            {
                phones.map(phone => <li key={phone.id}>
                        <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                    </li>
                )
            }
        </div>
    );
};

export default Phones;