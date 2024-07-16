import PropTypes from 'prop-types';
import { useState } from 'react';

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);

    const [enroll, setEnroll] = useState(false)

    const { name, maps, flags, area } = country;
    console.log(country);

    const style = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px'
    };

    return (
        <div style={style}>
            <h3>Name: {name.common}</h3>
            <h2>{area}</h2>
            <a href={maps.googleMaps}>Map</a>
            <br />
            <img src={flags.png} alt={`${name.common} flag`} />
            <ul>
                {country.altSpellings.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
            <button onClick={() => setVisited(!visited)}>{visited ? 'visited' : 'Going'}</button>

            {visited ? 'I have visited this country.' : ''}
            <button onClick={() => setEnroll(!enroll)}>
                {enroll ? 'Enrolled' : 'Buy'}
            </button>
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
    }).isRequired
};

export default Country;
