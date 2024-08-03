import React, {useState} from 'react';

const StateFulForm = () => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(password.length < 6) {
            setError("Password must be at least 6 characters");
        }
        else{
            setError('');
            console.log(name)
            console.log(email)
            console.log(password)
        }
    }

    const handleChange = (e, name) =>{
        if(name === "email"){setEmail(e.target.value)}
        else if(name === "name"){setName(e.target.value)}
        else if(name === "password"){setPassword(e.target.value)}
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => handleChange(e, "name")}
                    type="text"
                    name="name"
                /> <br/>

                <input
                    onChange={(e) => handleChange(e,"email")}
                    type="email"
                    name="email"
                /> <br/>

                <input
                    type="password"
                    onChange={(e) => handleChange(e, "password")}
                    required
                /> <br/>
                {
                    error && <p>{error}</p>
                }

                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default StateFulForm;