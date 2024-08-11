import {useEffect, useState} from 'react'
import './App.css'
import User from "./Components/User.jsx";
import InputUserForm from "./Components/InputUserForm.jsx";

function App() {
  const [users, setUsers] = useState([])


    // fetching initial data
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleAddUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email}
        // console.log(user)

        // sending data to the server
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                const newUser = [...users, data]
                setUsers(newUser)

                form.reset();
            })
    }

  return (
    <>
        <InputUserForm handleAddUser={handleAddUser}></InputUserForm>
        {
            users.map(user => <User key={user.id} user={user} />)
        }
    </>
  )
}

export default App
