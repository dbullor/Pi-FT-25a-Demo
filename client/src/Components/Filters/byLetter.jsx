import React from 'react'
import { orderLetter } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

export default function OrderLetter() {
  const dispatch = useDispatch()
  function onSelectChange(e){
    dispatch(orderLetter(e.target.value))
  }
  return (
    
      <select name="order" onChange={onSelectChange}>
        {/* <option value="order" key='order'>order alphabetically</option> */}
        <option value="AZ" key ='AZ'>From letter A to Z</option>
        <option value="ZA" key ='ZA'>From letter Z to A</option>
      </select>
  )
}
