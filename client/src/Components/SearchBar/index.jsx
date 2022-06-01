import React from 'react'
import {useState}  from 'react'
import { getCountryByName } from '../../Redux/Actions';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
  const [search, setSearch] = useState('')//creo un estado local
  let dispatch = useDispatch()

  function handleInputChange(e){
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search);
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(getCountryByName(search))
    setSearch('')
  }
  

  return (
    <div>
      
        <input type="text" onChange={(e)=> handleInputChange(e)} placeholder='Search...' value={search} />
        <button type='submit' value={search} key='Search' onClick={(e)=> handleSubmit(e)}>Search</button>
        
      
    </div>
  )

  
}
