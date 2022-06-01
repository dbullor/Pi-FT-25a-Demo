import React from 'react';
import Styles from '../CountriesCards/styles.module.css'

export default function CountryCard({name, continent, flag}) {
  return (
    <div className='card'>
      <div className={Styles.container}>
      <img src={flag} className={Styles.flag} alt="img not found" width='200px' height='200px' />
      <h3 className={Styles.name}>{name}</h3>
      <h5 className={Styles.continent}>{continent}</h5>
      </div>

      
    </div>
  )
}


