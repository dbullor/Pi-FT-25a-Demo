import React from 'react'
import OrderByPopulation from '../Filters/byPopulation';
import OrderByLetter from '../Filters/byLetter';
import FilterByContinent from '../Filters/byContinent';
import FilterByActivity from '../Filters/byActivity';
import Styles from './styles.module.css';

export default function Filter({setCurrentPage}) {

  return (
  <div className={Styles.container}>
    <OrderByPopulation setCurrentPage={setCurrentPage}/>
    <OrderByLetter setCurrentPage={setCurrentPage}/>
    <FilterByActivity setCurrentPage={setCurrentPage}/>
    <FilterByContinent setCurrentPage={setCurrentPage}/>
  </div>
  )
}
