import './App.css';
import Background from './Background';
import {Link, Routes, Route} from "react-router-dom";
// import Car_file from './Car_file';
import Dealerships from './Dealerships'
// import {useState, useEffect} from 'react'
 
function App() {

// const [carData, setCarData] = useState([])

// useEffect(() => {
//   const fetcher = () => {
//       fetch('http://localhost:3000/carparts')
//       .then(res => res.json())
//       .then(data =>
//           setCarData(data))
//         }
// fetcher()
// }, []);


  return (
    
<div>
  <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src=" https://i.postimg.cc/cHkvydkT/Gay-Pride-Flag-svg.webp" width="112" height="28" alt="placeholder"/>
            </a>
        
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href='/'>
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
                  <a className="button is-light" href="http://localhost:3000/">
                    Log in
                  </a>
                </div>
              </div>
            </div>
  </nav>
    <Routes>
        <Route path="/" element={<Background />} />
        <Route path="/Dealerships" element={<Dealerships />} />
    </Routes>
</div>  
);
}

export default App;
