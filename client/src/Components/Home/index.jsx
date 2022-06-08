
import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from '../../Redux/Actions/index';
import {Link} from 'react-router-dom'
import CountryCard from '../CountriesCards/CountryCard.jsx';
import NavBar from '../NavBar';
import Pagination from '../Pagination/index.jsx';
import FiltersOrder from '../Filters/index';
import Styles from './styles.module.css';


function Home() {

  const dispatch = useDispatch();
  
  //arreglo con paises del store
  const { countries } = useSelector((state)=> {return state})

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  let countriesPerPage = 10;

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = countries.slice(
    indexFirstCountry,
    indexOfLastCountry
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



//para traer el estado cuando el componente se monta, o se actualiza
  useEffect(() => {
    dispatch(getAllCountries());  
  }, [dispatch]);

 
  //recarga los paises
  function handleClick(e){
    e.preventDefault();
    dispatch(getAllCountries())
  }
  return (
    <div className={Styles.container}>
      <div>
      <NavBar className= {Styles.navbar}/>
      <div className={Styles.filter}>
      <FiltersOrder/>

      </div>
      <div>
        <button  className={Styles.reload} onClick={e =>{handleClick(e)}}>
          Reload all countries
        </button>
      </div>
      
    </div>
    <div>
    <div key="pagination">
          <Pagination
            countriesPerPage={countriesPerPage}
            allCountries={countries.length}
            pagination={pagination}
          />
        </div>
        <div className={Styles.conten}>
          <div className={Styles.card}>
          {currentCountries.length > 0 ? (
            currentCountries.map((c) => {
              return (
                <div key={c.id} >
                  <Link to={'/home/' + c.id}>
                  <CountryCard continent={c.continent} name={c.name} flag={c.flag} id={c.id}/> 
                  </Link>
                </div>
              );
            })
          ) : (
            <div>
              <h3>Countries not found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
      
  )
}
export default Home