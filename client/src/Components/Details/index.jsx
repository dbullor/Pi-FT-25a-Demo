import React from 'react';
import {getCountryDetails} from '../../Redux/Actions/index'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Styles from './styles.module.css'


export default function Details() {

  const {id}= useParams()
  const dispatch = useDispatch();

//traigo el detalle del pais del store que seleccionó el usuario
  const country = useSelector((state)=> state.countryId)
  
  useEffect(()=>{
    dispatch(getCountryDetails(id))//con esto accedo al detalle del id elegido por el usuario
    
  }, [dispatch, id])
  


  return(
    <div className={Styles.container}>
      <h1 className={Styles.title}>The World waits for Us. Let's travel!!</h1>
      <div className={Styles.boxHigh}>
        <div className={Styles.boxCard}>
          <div>
            <img className={Styles.flag} src={country.flag} alt={country.name} />
            <h2 className={Styles.name}>{country.name}</h2>
            <h3 className={Styles.capital}>Capital: {country.capital}</h3>
            <h3 className={Styles.continent}>Continent: {country.continent}</h3>
            <h3 className={Styles.subRegion}>Subregion: {country.sub_region}</h3>
            <h3 className={Styles.area}>Area: {country.area} Km2</h3>
            <h3 className={Styles.population}>Population: {country.population} People</h3>
            <h3 className={Styles.id}>Id: {country.id}</h3>
          </div>
        </div>
      <div>
            {
              country.activities?.map((c)=>{
                return (    
                   <div className={Styles.containerAct}>
                      <h4 className={Styles.nameAct}>Activity: {c.name} </h4>
                   
                   <h5 className={Styles.difficulty}>Difficulty: {c.difficulty} </h5>
                   
                   <h5 className={Styles.season}>Season: {c.season} </h5>
                  
                   <h5 className={Styles.duration}>Duration: {c.duration}</h5>
                   </div>
                );
              })
            }
          
        </div>
      </div>
          <Link to='/home'><button className={Styles.btnBack}>Back</button></Link>
      
    </div>
  )  
}
