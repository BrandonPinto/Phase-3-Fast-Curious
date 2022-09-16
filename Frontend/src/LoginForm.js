import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HomeForm from './HomeForm';
export default function LoginForm({ Login, error, loginData }) {
    const navigate = useNavigate()
    const [details, setDetails] = useState({ username: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();
     const userExists = loginData.find((person) => {
            return  details.username === person.username && details.password === person.password 
        })
        if(userExists) {
            navigate("Background")
        } else {
           window.alert('Did you forget?')
        }
    }


    return (

        
        <form onSubmit={submitHandler}>
            <div class="container is-max-widescreen">
                <div class="notification is-danger">
                <h2> Log in</h2>
                {(error != "") ? (<div className="error"> {error} </div>) : ""}
                {/* <div className='form-group'>
        <label htmlFor="name">name:</label>
        <input type ="text" name="name" id="name" onChange={e =>setDetails({...details, name:e.target.value})} value={details.name}/>
    </div> */}
                <div className='form-group'>
                    <label htmlFor="username">username: </label>
                    <input class="input is-danger is-rounded" type="username" name="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">password: </label>
                    <input class="input is-danger is-rounded" type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input class="button is-danger is-inverted is-rounded"type="submit" value="Login" />
                </div>
            </div>
        </form>

        
    );
}
