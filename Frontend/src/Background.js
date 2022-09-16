import React, { useState, useEffect } from 'react'
// import Car_file from './Car_file'

function Background() {
  const [selected, setSelected] = useState([])
  const [filter, setFilter] = useState([])
  const [partArr, setPartArr] = useState([])



  // fetch('http://localhost:9292/cars')

  useEffect(() => {

    const fetcher = () => {
      fetch('http://localhost:9292/cars')
        .then(res => res.json())
        .then(data => {
          setSelected(data)
        })
    }
    fetcher()
  }, []);

  
  let handleChange = (e) => {
    setPartArr(selected.filter(part=> part.car_part === e.target.value))
  }


  useEffect(() => {
    if(selected.length > 0 ){
      let tempArr = []
      selected.map(part => {
        if (!tempArr.includes(part.car_part)) {
          tempArr.push(part.car_part)
        }
      })
      setFilter(tempArr)
    }
  }, [selected])

  return (

    <div class="dropdown is-active">
      <div class="dropdown-trigger">
        <section className="section" style={{ display: '$menu-list-border-left' }}>
          <h1 className="menu-label">Parts</h1>
          <ul className="menu-list">
            <div>
              <select onChange={handleChange}>
                {filter.map((part,i) => {
                    return <option key={i} value={part}>{part}</option>
                })}
              </select>
            </div>
            <div>
           {partArr.map(part=>(
              <ul key={part.id} className="menu-label">
                <li >{part.carpart_name}</li>
                <li >{`$${part.price}`}</li>
                <img alt='car part' src={part.imgURL} />
              </ul>
           ))}
            </div>
          </ul>
        </section>
      </div>
    </div>

  )
}

export default Background

//through each iteration I need the program to check if the newArray contains
// the previously added index and move on to the next one