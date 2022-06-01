import React from 'react';
import {getCountryDetails} from '../../Redux/Actions/index'
import NavBar from '../NavBar/index';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function Details() {
  // const id = props.match.props.id;
  const {id}= useParams()
  const dispatch = useDispatch();

  const country = useSelector((state)=> state.countryId)
  useEffect(()=>{
    dispatch(getCountryDetails(id))//con esto accedo al detalle del id elegido por el usuario
    
  }, [dispatch, id])
  


  return(
    <div>
    <NavBar/>
    <div className='cardContainer'>
        <div className='countryContainer'>
          <div className='card'>
            <img className='img' src={country.flag} alt={country.name} />
            <h1>{country.name}</h1>
            <h3>Capital: {country.capital}</h3>
            <h3>Continent: {country.continent}</h3>
            <h3>Subregion: {country.sub_region}</h3>
            <h3>Area: {country.area}</h3>
            <h3>Population: {country.population}</h3>
          </div>
          <div>
          </div>
        </div>
          <Link to='/home'><button>Back</button></Link>
      </div>
    </div>
  )  
}
