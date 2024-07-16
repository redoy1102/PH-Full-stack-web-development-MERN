// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    
    return (
        <div>
            <h2>I am from Countries.jsx file: {countries.length}</h2>
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.cca2} country={country}></Country>)
                }
            </div>
        </div>
    );
};

// Countries.propTypes = {
//     hey: PropTypes.shape({
//         name: PropTypes.string.isRequired
//     })
// }

export default Countries;