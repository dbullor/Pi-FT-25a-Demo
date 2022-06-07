import React from 'react';
import Styles from './styles.module.css'

export default function CountryCard({name, continent, flag}) {
  return (
    <div className={Styles.card}>
      <div className={Styles.container}>
      <img src={flag} className={Styles.flag} alt="img not found" />
      <h3 className={Styles.name}>{name}</h3>
      <h5 className={Styles.continent}>{continent}</h5>
      </div>  
    </div>
  )
}


