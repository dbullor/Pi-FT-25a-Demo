import React from 'react'
import {useState}  from 'react'
import { getCountryByName } from '../../Redux/Actions';
import { useDispatch } from 'react-redux';

import Styles from './styles.module.css';


export default function SearchBar() {

  const [search, setSearch] = useState('')//creo un estado local
  let dispatch = useDispatch()

 
  function handleChange(e){
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(search !== ''){
    dispatch(getCountryByName(search))
    setSearch('')
    } else {
      alert('Please enter a valid country')
    }
  }
  

  return (
    <div className={Styles.container}>
      
        <input type="text" className={Styles.text} onChange={(e)=> handleChange(e)} placeholder='Search...' value={search} />
        <button type='submit' className={Styles.btnSearch} value={search} key='Search' onClick={(e)=> handleSubmit(e)}>Search</button>
        
      
    </div>
  )

  
}
