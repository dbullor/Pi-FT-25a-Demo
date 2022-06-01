import React from 'react'
import { orderPopulation } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

export default function OrderByPopulation() {
  const dispatch = useDispatch()
  function onSelectChange(e){
    dispatch(orderPopulation(e.target.value))
  }
  
  return (
    <select name='select' onChange={onSelectChange}>
        <option value="Largest" key='Largest'>Population ascendant</option>
        <option value="Smallest" key='Smallest'>Population descendant</option>
      </select>
  )
}
