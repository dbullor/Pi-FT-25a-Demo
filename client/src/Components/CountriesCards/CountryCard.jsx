import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../CountriesCards/styles.module.css'

export default function CountryCard({name, continent, flag, id}) {
  return (
    <div className='card'>
      <div className={Styles.container}>
      <img src={flag} className={Styles.flag} alt="img not found" width='200px' height='200px' />
      <h3 className={Styles.name}>{name}</h3>
      <h5 className={Styles.continent}>{continent}</h5>
      </div>
      {/* <Link to={`/home/${id}`}>
          <button key={id}>
            Details
          </button>
        </Link> */}

      
    </div>
  )
}


