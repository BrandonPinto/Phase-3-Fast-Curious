import React, { useState, useEffect } from 'react'

function Background() {
  const [selected, setSelected] = useState([])
  const [filter, setFilter] = useState([])
  const [partArr, setPartArr] = useState([])
  const [bodyArr, setBodyArr] = useState([])
  const [bodyArrFilter, setBodyArrFilter] = useState([])
  const [form, setForm] = useState({
    carpart_name: "",
    car_part: "",
    price: "",
    imgURL: ""
  })

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

  useEffect(() => {

    const fetcher = () => {
      fetch('http://localhost:9292/cars/body')
        .then(res => res.json())
        .then(data => {
          setBodyArr(data)
        })
    }
    fetcher()
  }, []);

  let handleBodyChange = (e) => {
    setBodyArr(bodyArrFilter.filter(part => part.car_part === e.target.value))
  }

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

  useEffect(() => {
    if (bodyArr.length > 0) {
      let newTempArr = []
      bodyArr.map(part => {
        if (!newTempArr.includes(part.car_part)) {
          newTempArr.push(part.car_part)
        }
      })
      setBodyArrFilter(newTempArr)
    }
  }, [bodyArr])

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
      <div>
        <select onChange={handleBodyChange}>
          {bodyArrFilter.map((part, i) => {
            return <option key={i} value={part}>{part}</option>
          })}
        </select>
      </div>
      <div>
        {bodyArr.map(part => (
          <ul key={part.id}>
            <li >{part.carpart_name}</li>
            <li >{`$${part.price}`}</li>
            <img alt='car body' src={part.imgURL} />
          </ul>
        ))}
      </div>


    </div>


  )
}

export default Background

//through each iteration I need the program to check if the newArray contains
// the previously added index and move on to the next one