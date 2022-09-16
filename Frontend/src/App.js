import './App.css';
import Background from './Background';
import {Link, Routes, Route} from "react-router-dom";
import Dealerships from './Dealerships'
import {useState, useEffect} from 'react'
import LoginForm from './LoginForm';
import HomeForm from './HomeForm';
 
function App() {
const [loginData, setLoginData] = useState([])
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

const [user, setUser] = useState({username:""})
const [error, setError] = useState ("");

const Login = person => {
  console.log(person);

if (person.username == person.username && person.password == person.password) {
  console.log ("logged in");

  setUser({
    username: person.username
  });
} else {
  console.log("details dont match")
  setError("Details do not match!")
}  


}

const Logout = () => {
  console.log("logout")
  setUser({name:"", username:""})
}


  return (
    
<div>
  <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://localhost:3000/">
              <Link className="navbar-item"to="/"><img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Russian_Empire_%28black-yellow-white%29.svg/2560px-Flag_of_the_Russian_Empire_%28black-yellow-white%29.svg.png" width="112" height="28"/></Link>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            <Link className="navbar-item" to="/Dealerships">Dealerships</Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href='/'>
                 Car body
                </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item" href='/' >
                    toyota
                  </a>
                </div>
              </div>
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
<br></br>
  {(user.username != "") ? (
    <div className='welcome'>
        <h2> Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
</div>
):(
    <LoginForm Login={Login} loginData={loginData} error={error} Link="/Background"/>
)}


    <Routes>
        <Route path="/Background" element={<Background  />} />
        <Route path="/Dealerships" element={<Dealerships />} />
        <Route path='/' element={<HomeForm />} />
    </Routes>
</div>  
);
}

export default App;
