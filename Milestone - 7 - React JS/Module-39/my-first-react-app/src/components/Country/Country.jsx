import PropTypes from 'prop-types';
import { useState } from 'react';
import './Country.css'

// eslint-disable-next-line react/prop-types
const Country = ({ country, handleVisitedCountries, handleSetFlag }) => {
    const [visited, setVisited] = useState(false);
    const [enroll, setEnroll] = useState(false)

    const { name, maps, flags, area } = country;
    // console.log(country);

    // console.log(handleVisitedCountries);

    return (
        <div className={`country_style ${visited ? 'visited_style' : 'non_visited'}`}>

            <h3>Name: {name.common}</h3>
            <h2>{area}</h2>
            <a href={maps.googleMaps}>Map</a>
            <br />
            <img src={flags.png} alt={`${name.common} flag`} />
            <ul>
                {country.altSpellings.map((element, index) => {
                    // console.log(index);
                    <li key={index}>{element}</li>
                })}
            </ul>
            <button onClick={() => setVisited(!visited)}>
                {visited ? 'visited' : 'Going'}
            </button> <br />
            {visited ? 'I have visited this country.' : ''} <br />

            <button onClick={() => handleVisitedCountries(country)}>Most visited</button> <br /> <br />

            <button onClick={() => handleSetFlag(flags.png)}>Add Flag</button>

        </div>
    );
};

Country.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.shape({
            common: PropTypes.string.isRequired
        }).isRequired,
        maps: PropTypes.shape({
            googleMaps: PropTypes.string.isRequired
        }).isRequired,
        flags: PropTypes.shape({
            png: PropTypes.string.isRequired
        }).isRequired,
        area: PropTypes.number.isRequired,
        altSpellings: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    handleVisitedCountries: PropTypes.func.isRequired
};


export default Country;
