
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




  //useEffect para traer el estado cuando el componente se monta
 
function Home() {
  // const [estado, setEstado] = useState(false)
  const dispatch = useDispatch();
  const { countries } = useSelector((state)=> {return state})
  const [currentPage, setCurrentPage] = useState(1);
  let countriesPerPage = 0;
  if (currentPage === 1) { countriesPerPage = 9 }
  if (currentPage >= 2) { countriesPerPage = 10 }
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = countries.slice(
    indexFirstCountry,
    indexOfLastCountry
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(()=>{
    console.log(currentCountries)
  },[])

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

 

  function handleClick(e){
    e.preventDefault();
    dispatch(getAllCountries())
  }
  return (
    <div className={Styles.container}>
    <div>
      <NavBar/>
      <FiltersOrder/>
 
      <button onClick={e =>{handleClick(e)}}>
        Reload all countries
      </button>
      
      
    </div>
    <div>
    <div key="pagination">
          <Pagination
            countriesPerPage={countriesPerPage}
            allCountries={countries.length}
            pagination={pagination}
          />
        </div>
      
        <div>
          {currentCountries.length > 0 ? (
            currentCountries.map((c) => {
              return (
                <div key={c.id}>
                  <Link to={'/home/' + c.id}>
                  <CountryCard continent={c.continent} name={c.name} flag={c.flag} id={c.id}/> 
                  </Link>
                </div>
              );
            })
          ) : (
            <div>
              <img src="{cargando}" alt="Not Found" />,
              <h3>Countries not found</h3>
            </div>
          )}
        </div>
    </div>
    </div>
      
  )
}
export default Home