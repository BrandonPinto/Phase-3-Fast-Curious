import React from 'react'
import { useState } from 'react'
function SignForm({ passwordHandler, setPasswordForm, passwordForm }) {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    let handleFormChange = (e) => {
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    let passwordHandleChange = (e) => {
        console.log(e.target.value)
        setPasswordForm({
            ...passwordForm,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        if(form.username === '' && form.password === '') {
            window.alert('Please enter your new username and password to sign up')
        }
        e.preventDefault()

        fetch("http://localhost:9292/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        }).then(res => res.json())
            .then((data) => console.log(data))
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input value={form.username} onChange={handleFormChange} type="text" name="username" placeholder="New Username" />
                <input value={form.password} onChange={handleFormChange} type="password" name="password" placeholder="Password" />
                <input type="submit" value='Sign Up'></input>
            </form>
            <div>
                <form onSubmit={passwordHandler}>
                <input onChange={passwordHandleChange} value={passwordForm.currentPassword} type="password" name="currentPassword"placeholder="Current Password" />
                <input onChange={passwordHandleChange} value={passwordForm.password} type="password" name="password" placeholder="New Password" />
                <input type="submit" value='Submit New Password'></input>
                </form>
            </div>
        </div>
    )
}
export default SignForm