import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignForm from './SignForm';

export default function LoginForm({ error, loginData, currentUser }) {
    const navigate = useNavigate()
    const [details, setDetails] = useState({id:"", username: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();
        const userExists = loginData.find((person) => {
            return details.username === person.username && details.password === person.password
        })
        if (userExists) {
            console.log(currentUser.push(details.id))
            navigate("/Background")
        } else {
            window.alert('Did you forget?')
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2> Log in</h2>
                    {(error !== "") ? (<div className="error"> {error} </div>) : ""}
                    <div className='form-group'>
                        <label htmlFor="username">username: </label>
                        <input type="username" name="username" onChange={e => setDetails({ ...details, username: e.target.value})} value={details.username} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">password: </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="Login" />
                </div>

            </form>
            <div><SignForm /></div>
        </>
    );
}
