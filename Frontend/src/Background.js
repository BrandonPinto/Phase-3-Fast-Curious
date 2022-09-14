import React from 'react'
import {useState} from 'react'
// import Car_file from './Car_file'

function Background({ carData }) {

  let handleChange = (e) => {
    console.log(e)
    let result = carData.filter((part, i) => {
      if(part.type === e.target.value)
      return <ul>
        <li>{part.name, part.imgUrl, part.price}</li>
      </ul>
    })
  }
let newArray = []


  return (

<div>
    <div>
      <section onChange={handleChange} className="section" style={{display: '$menu-list-border-left'}}>
        <h1 className="menu-label">General</h1>
          <ul className="menu-list">
            <div>
            <select onChange={handleChange}>
            {carData.map((part, i) => {
              // if(i == part.type &&  i++)
                return <option key={i} value={part.name}>{part.type}</option>
              })}
            </select>
            </div>
          </ul>
      </section>
    </div>
</div>
    
  )
}

export default Background
