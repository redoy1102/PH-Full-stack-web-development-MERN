import PropTypes from 'prop-types';

export default function Friend({ user }) {
    const { name, email } = user;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
        </div>
    );
}

Friend.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
};
