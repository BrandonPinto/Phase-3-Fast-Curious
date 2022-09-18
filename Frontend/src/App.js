import './App.css';
import Background from './Background';
import { Link, Routes, Route } from "react-router-dom";
import Dealerships from './Dealerships'
import { useState, useEffect } from 'react'
import LoginForm from './LoginForm';
import HomeForm from './HomeForm';


function App() {
  const [loginData, setLoginData] = useState([])

  const [currentUser, setCurrentUser] = useState({
    id: "",
    username: "",
    password: ""
  })

  const [user, setUser] = useState({ username: "" })

  const [error, setError] = useState("");


  useEffect(() => {
    const fetcher = () => {
      fetch('http://localhost:9292/users')
        .then(res => res.json())
        .then(data => {
          setLoginData(data)
        })
    }
    fetcher()
  }, []);

  function removeUser(id) {
    const result = loginData.filter(user => user.id !== id)
    setLoginData(result)
  }

  function handleDelete(id) {
    fetch(`http://localhost:9292/users/${currentUser.id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(() => removeUser(id))
  }


  const Logout = () => {
    console.log("logout")
    setUser({ name: "", username: "" })
  }



  return (
    
<div>
  <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://localhost:3000/">
              <Link className="navbar-item"to="/"><img src="https://i.postimg.cc/ydDXw9Zp/Screen-Shot-2022-09-16-at-1-13-04-PM.png" width="112" height="28"/></Link>
            </a>

    <div>
      <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <Link className="navbar-item" to="/"><img src="https://www.crwflags.com/fotw/images/r/ru_bow.gif" width="112" height="28" /></Link>
          </a>
          <button onClick={handleDelete}>DELETE CURRENT USER</button>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/Dealerships">Dealerships</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary, button is-black" href="">
                <Link to="/"><strong >Sign up</strong> </Link>
              </a>
              <a className="button is-light" href="http://localhost:3000/" >
                Log in
              </a>
            </div>
          </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary, button is-black" href="lo">
                    <strong >Sign up</strong>
                  </a>
                  
                  < Link className="button is-light" href="http://localhost:3000/" to="/LoginForm" >Log-in </Link>
                  
                </div>
              </div>
            </div>
  </nav>



    <Routes>
        <Route path="/Background" element={<Background  />} />
        <Route path="/Dealerships" element={<Dealerships />} />
        <Route path='/' element={<HomeForm />} />
    </Routes>

  {(user.username != "") ? (
    <div className='welcome'>
        <h2> Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
</div>
):(
    <LoginForm Login={Login} loginData={loginData} error={error} Link="/Background"/>
)}

</div>  
);
}

export default App;

// onClick={handleRemove}