import React from 'react'
import { useState } from 'react'
function SignForm() {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    let handleChange = (e) => {
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
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
                <input value={form.username} onChange={handleChange} type="text" name="username" placeholder="New Username" />
                <input value={form.password} onChange={handleChange} type="password" name="password" placeholder="New Password" />
                <input type="submit" value='Sign Up'></input>
            </form>
        </div>
    )
}
export default SignForm