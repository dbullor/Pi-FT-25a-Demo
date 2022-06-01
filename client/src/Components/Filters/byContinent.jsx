import React from 'react'
import { continentFilter } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

export default function FilterByContinent() {
  const dispatch = useDispatch()
  function onSelectChange(e){
   
    dispatch(continentFilter(e.target.value))
    
  }
  return (
    <select onChange = {e => onSelectChange(e)} >
    <option value="All" key="All">All Continents</option>
    <option value="Americas" key ="Americas">Americas</option>
    <option value="Europe" key ="Europe">Europe</option>
    <option value="Africa" key ="Africa">Africa</option>
    <option value="Asia" key ="Asia">Asia</option>
    <option value="Antarctic" key ="Antarctic">Antarctic</option>
    <option value="Oceania" key ="Oceania">Oceania</option>
  </select>
  )
}