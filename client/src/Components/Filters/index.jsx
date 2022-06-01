import React from 'react'
import OrderByPopulation from '../Filters/byPopulation';
import OrderByLetter from '../Filters/byLetter';
import FilterByContinent from '../Filters/byContinent';
import FilterByActivity from '../Filters/byActivity';
import { useDispatch } from 'react-redux';
import { getAllCountries } from '../../Redux/Actions';

export default function Filter() {
  const dispatch = useDispatch()

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }
  return (
  <div>
    <OrderByPopulation/>
    <OrderByLetter/>
    <FilterByActivity/>
    <FilterByContinent/>
  </div>
  )
}
