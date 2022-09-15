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
            navigate("/HomeForm")
        } else {
            console.log('negative')
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2> Log in</h2>
                {(error != "") ? (<div className="error"> {error} </div>) : ""}
                {/* <div className='form-group'>
        <label htmlFor="name">name:</label>
        <input type ="text" name="name" id="name" onChange={e =>setDetails({...details, name:e.target.value})} value={details.name}/>
    </div> */}
                <div className='form-group'>
                    <label htmlFor="username">username: </label>
                    <input type="username" name="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    );
}
