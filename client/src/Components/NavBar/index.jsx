import React from 'react'
import { Link } from "react-router-dom";
import Home from '../Home';

export default function NavBar() {
  return (
    <div>
      <Link to='/home/activity'>
        <button className="newActivity">Create tourist activity</button>
      </Link>
        <h1>NavBar</h1>
      <Link to='/home' className='backHome'>
        <button className="btn.back">Back</button>
      </Link>
    </div>
  )
}
