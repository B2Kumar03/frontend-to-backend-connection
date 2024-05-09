import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes,setJokes]=useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((responce)=>setJokes(responce.data.data))
    .catch((err)=>console.log(err))
  })

  return(
  <>
    <h1>Full Stack app</h1>
    <h3>Jokes :{jokes.length}</h3>
    {
      jokes.map((joke)=>{
        return <div key={jokes.id}>
            <h2>{joke.joke}</h2>
        </div>
      })
    }
  </>
  )
}

export default App
