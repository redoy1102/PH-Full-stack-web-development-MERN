
import './App.css'
import AddUser from "./Component/AddUser.jsx";

function App() {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};

        console.log(user)

        // data is sending to the server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    // alert('User added successfully.');
                    form.reset();
                }
            })
    }
  return (
    <>
        <AddUser handleSubmit={handleSubmit}/>
    </>
  )
}

export default App
