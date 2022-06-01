import React from 'react'
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/index'


export default function NavBar() {
  return (

    <div>
      <div>
      <h1>The World waits for Us. Let's travel!!</h1>
        <SearchBar/>
        
      </div>
      <div>
      <Link to='/home' className='backHome'>
        <button className="btn.back">Back</button>
      </Link>
      <Link to='/home/activity'>
        <button className="newActivity">Create tourist activity</button>
      </Link>
      </div>
    </div>
  )
}
