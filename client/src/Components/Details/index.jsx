import React from 'react';
import {getCountryDetails} from '../../Redux/Actions/index'

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Styles from './styles.module.css'


export default function Details(activities) {
  const {id}= useParams()
  const dispatch = useDispatch();

  const country = useSelector((state)=> state.countryId)
  useEffect(()=>{
    dispatch(getCountryDetails(id))//con esto accedo al detalle del id elegido por el usuario
    
  }, [dispatch, id])
  


  return(
    <div className={Styles.container}>
    <h1>The World waits for Us. Let's travel!!</h1>
    <div className='cardContainer'>
        <div className='countryContainer'>
          <div className='card'>
            <img className='img' src={country.flag} alt={country.name} />
            <h2>{country.name}</h2>
            <h3>Capital: {country.capital}</h3>
            <h3>Continent: {country.continent}</h3>
            <h3>Subregion: {country.sub_region}</h3>
            <h3>Area: {country.area} Km2</h3>
            <h3>Population: {country.population} People</h3>
            <h3>Id: {country.id}</h3>
          </div>
          <div>
            {
              country.activities?.map((c)=>{
                return (    
                   <div className='activities'>
                      <h6>Activities: {c.name} </h6>
                   
                   <h6>Difficulty: {c.difficulty} </h6>
                   
                   <h6>Season: {c.season} </h6>
                  
                   <h6>Duration: {c.duration}</h6>
                   </div>
                );
              })
            }
          </div>
          
        </div>
          <Link to='/home'><button>Back</button></Link>
      </div>
      
    </div>
  )  
}
