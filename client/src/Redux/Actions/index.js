import axios from 'axios'





export const getAllCountries = () => (dispatch) => {
  return axios.get("http://localhost:3001/countries")
  .then((info) => {return dispatch({ type: 'GET_ALL_COUNTRIES', payload: info.data })})
  .catch((error) => console.log(error))
};


export const getCountryByName = (name) => (dispatch) => {
  return axios.get(`http://localhost:3001/countries?name=${name} `)
  .then((info) => {return dispatch({ type: 'GET_COUNTRY_NAME', payload: info.data })})
  .catch((error) => console.log(error))
};

export const getCountryDetails = (id) => (dispatch) => {
  return axios.get(`http://localhost:3001/countries/${id}`)
  .then((info) => dispatch({ type: 'GET_COUNTRY_DETAILS', payload: info.data }))
  .catch((error) => console.log(error))
  
};



export const getAllActivities = () => (dispatch) => {
  return axios.get("http://localhost:3001/activity")
  .then((info) => dispatch({ type: 'GET_ALL_ACTIVITIES', payload: info.data }))
  .catch((error) => console.log(error))
};


export function postActivity(body) {
  return async function (dispatch) {
      var activity = await axios.post("http://localhost:3001/activity", body);
      return dispatch({
          type : 'POST_ACTIVITY',
          payload : activity.data
      })
  }
}

export function continentFilter(continent){
  return {
    type:'FILTER_BY_CONTINENT',
    payload: continent,
  }
}

export function activityFilter(activity){
  return {
    type:'FILTER_BY_ACTIVITY',
    payload: activity,
  }
}

export function orderLetter(letter){
  return {
    type:'ORDER_BY_LETTER',
    payload: letter,
  }
}

export function orderPopulation(population){
  return {
    type:'ORDER_BY_POPULATION',
    payload: population,
  }
}


