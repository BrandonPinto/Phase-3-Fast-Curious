import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignForm from './SignForm';
export default function LoginForm({ error, currentUser, setCurrentUser }) {

    const navigate = useNavigate()

    const [details, setDetails] = useState({ username: "", password: "" })
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: "",
        password: ""
    })

    const submitHandler = e => {
        console.log(currentUser)
        e.preventDefault()

        fetch("http://localhost:9292/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        }).then(res => res.json())
            .then((data) => setCurrentUser(data))
            .then(()=> { 
                if(details.username !== currentUser.username && details.password !== currentUser.password) {
                    window.alert('One or more fields are incorrect')
                } else {
                    navigate('/Background')
            }})
        }

    const passwordHandler = e => {
        if (currentUser.password === passwordForm.currentPassword) {
            e.preventDefault()
            fetch(`http://localhost:9292/users/password/${currentUser.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(passwordForm)
            })
                .then((res) => res.json())
                .then(data => setPasswordForm(data))
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
                        <input type="username" name="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">password: </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="Login" />
                </div>

            </form>
            <div><SignForm passwordForm={passwordForm} setPasswordForm={setPasswordForm} passwordHandler={passwordHandler} /></div>
        </>
    );
}