// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [flagLink, setFlagLink] = useState([]);

    const handleVisitedCountries = country => {
        setVisitedCountries([...visitedCountries, country.name.common]);
    }

    const handleSetFlag = link => {
        setFlagLink([...flagLink, link]);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <div>
                {
                    flagLink.map((link, index) => <img src={link} key={index} className="img"></img>)
                }
            </div>

            <div>
                <ul>
                    {
                        visitedCountries.map((countryName, index) => {
                            return <li key={index}>{countryName}</li>
                            // console.log(countryName);
                            // if (countryName[0] === "I") {
                            //     return <li key={index}>{countryName}</li>
                            // }
                        })
                    }
                </ul>
            </div>

            <div className="countries-container">
                {
                    countries.map(country => (
                        <Country
                            key={country.cca2}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleSetFlag = {handleSetFlag}
                        />
                    ))
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