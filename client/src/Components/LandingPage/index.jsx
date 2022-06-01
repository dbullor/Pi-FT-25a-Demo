import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './styles.module.css'


export default function LandingPage() {
  return (
    <div className={Styles.mayor}>
      <h1 className={Styles.travel}>Let's Travel!!</h1>
      <Link to='/home'>
        <button className={Styles.btn}></button>
        
      </Link>
    </div>
    
  )
}
