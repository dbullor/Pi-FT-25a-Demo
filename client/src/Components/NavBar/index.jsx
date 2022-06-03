import React from 'react'
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/index'
import Styles from './styles.module.css';


export default function NavBar() {
  return (

    <div>
      <div className={Styles.box}>
      <h1 className={Styles.title}>The World waits for Us. Let's travel!!</h1>
        <SearchBar/>
        
      </div>
      <div>
      <Link to='/home' className='backHome'>
        <button className={Styles.btnBack}>Back</button>
      </Link>
      <Link to='/home/activity'>
        <button className={Styles.btnCreate}>Create tourist activity</button>
      </Link>
      </div>
    </div>
  )
}
