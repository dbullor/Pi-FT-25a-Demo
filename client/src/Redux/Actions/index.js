import axios from 'axios'


// Trae los paises del back-end, y los despacha al Reducer en una acción.
export const getAllCountries = () => (dispatch) => {
  return axios.get("http://localhost:3001/countries")
  .then((info) => {return dispatch({ type: 'GET_ALL_COUNTRIES', payload: info.data })})
  .catch((error) => console.log(error))
};


// Trae el país que el usuario ponga en la search bar, y los despacha al Reducer en una acción.
export const getCountryByName = (name) => (dispatch) => {
  return axios.get(`http://localhost:3001/countries?name=${name} `)
  .then((info) => {return dispatch({ type: 'GET_COUNTRY_NAME', payload: info.data })})
  .catch((error) => console.log(error))
};


// Trae el país al que se le hace click pidiendo los detalles del mismo, y los despacha al Reducer en una acción.
export const getCountryDetails = (id) => (dispatch) => {
  return axios.get(`http://localhost:3001/countries/${id}`)
  .then((info) => dispatch({ type: 'GET_COUNTRY_DETAILS', payload: info.data }))
  .catch((error) => console.log(error))
  
};


// Trae todas las actividades turísticas para poder agregarlas en el opción de filtrado
export const getAllActivities = () => (dispatch) => {
  return axios.get("http://localhost:3001/activity/all")
  .then((info) => dispatch({ type: 'GET_ALL_ACTIVITIES', payload: info.data }))
  .catch((error) => console.log(error))
};



export const postActivity = (body) => (dispatch)=>{
  return axios.post("http://localhost:3001/activity", body)
  .then((info) => dispatch({type: "POST_ACTIVITY", payload: info.data}))
  .catch((error)=> console.log(error))
}
//toma el continent a filtrar y lo manda al reducer con esta acción
export function continentFilter(continent){
  return {
    type:'FILTER_BY_CONTINENT',
    payload: continent,
  };
};

//toma el activity a filtrar y lo manda al reducer con esta acción
export function activityFilter(activity){
  return {
    type:'FILTER_BY_ACTIVITY',
    payload: activity,
  };
};

//ordena por letra según la opción elegida por el usuario
export function orderLetter(letter){
  return {
    type:'ORDER_BY_LETTER',
    payload: letter,
  };
};

//ordena por población
export function orderPopulation(population){
  return {
    type:'ORDER_BY_POPULATION',
    payload: population,
  };
};



