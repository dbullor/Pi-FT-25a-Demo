import React from 'react'
import { orderPopulation } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'
import Styles from './styles.module.css';


export default function OrderByPopulation() {
  const dispatch = useDispatch();
  

  function handleChange(e){
    e.preventDefault()
    dispatch(orderPopulation(e.target.value))
  }
  
  return (
    <select name='select' className={Styles.population} onChange={handleChange}>
        <option value="orderPopulation" key="orderPopulation">Order population</option>
        <option value="Largest" key='Largest'>Population ascendant</option>
        <option value="Smallest" key='Smallest'>Population descendant</option>
      </select>
  )
}
