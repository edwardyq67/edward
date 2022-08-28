import { useState } from 'react'
import user from './user.json'
import './App.css'


function App() {
  console.log(user)
  const color=['#845EC2','#D65DB1','#FF6F91','#FF9671','#FFC75F','#634A7A','#B54D2B','#53B577','#00747F']
  const randomt=Math.floor(Math.random()*user.length)
  const [index,setIndex]=useState(randomt)

  const press=()=>{
    const randomt=Math.floor(Math.random()*user.length)
    setIndex(randomt)
  }
  const colors=Math.floor(Math.random()*color.length)
  document.body.style=`background:${color[colors]}`
  return (
    <div className="App">
      <div className="card" style={{color:color[colors]}}>
      <li><i className="fa-brands fa-atlassian"></i>{user[randomt].quote}</li>
      <hr />
      <li className='autor'>{user[randomt].author}</li>
      <button onClick={press}  style={{background:color[colors]}}><i className="fa-solid fa-arrow-right-arrow-left" style={{color:'#FFFFFF'}}></i></button>
      </div>
      
    </div>
  )
}

export default App
