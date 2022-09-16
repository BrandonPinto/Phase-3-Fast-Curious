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
    setPartArr(selected.filter(part => part.car_part === e.target.value))
  }


  useEffect(() => {
    if (selected.length > 0) {
      let tempArr = []
      selected.map(part => {
        if (!tempArr.includes(part.car_part)) {
          tempArr.push(part.car_part)
        }
      })
      setFilter(tempArr)
    }
  }, [selected])

  
  const [form, setForm] = useState({
    carpart_name: "",
    car_part: "",
    price: "",
    imgURL: ""
})

let handlePartChange = (e) => {
    console.log(e.target.value)
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

function handlePartSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/cars", {
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
      <div>
        <section className="section" style={{ display: '$menu-list-border-left' }}>
          <h1 className="menu-label">General</h1>
          <ul className="menu-list">
            <div>
              <select onChange={handleChange}>
                {filter.map((part, i) => {
                  return <option key={i} value={part}>{part}</option>
                })}
              </select>
            </div>
            <div>
              {partArr.map(part => (
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
      <div>
            <form onSubmit={handlePartSubmit}>
                <input value={form.carpart_name} onChange={handlePartChange} type="text" name="carpart_name" placeholder="Car part name" />
                <input value={form.car_part} onChange={handlePartChange} type="text" name="car_part" placeholder="Type of car part" />
                <input value={form.price} onChange={handlePartChange} type="text" name="price" placeholder="Price" />
                <input value={form.imgURL} onChange={handlePartChange} type="text" name="imgURL" placeholder="Image URL" />
                <input type="submit" value="Add a part"></input>
            </form>
        </div>



    </div>


  )
}

export default Background

//through each iteration I need the program to check if the newArray contains
// the previously added index and move on to the next one