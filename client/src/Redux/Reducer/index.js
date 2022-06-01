
  const initialState = {
    allCountries: [],
    countries: [],
    allActivities: [],
    countryId: {}

  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
        return { 
          ...state, 
          allCountries: action.payload, //mando todo lo que tengo de allcountries
          countries: action.payload
        };
    
        case 'GET_COUNTRY_NAME':
          const country = [];
          if(!action.payload.name){
            return "This Country doesn't exist"
          } else{
            country.push(action.payload)
          }
          return { 
          ...state, 
          countries: country //mando todo lo que tengo de allcountries
        
        };

        
        case 'GET_ALL_ACTIVITIES':
            return {
            ...state, 
            allActivities: action.payload
          };

        case 'POST_ACTIVITY':
            return {
            ...state,  
          };

        case 'GET_COUNTRY_DETAILS':
          console.log(action.payload)
            return {
            ...state, 
            countryId: action.payload 
          };

        case 'FILTER_BY_CONTINENT':
          const allcoun = state.allCountries;
          const filterCountries = action.payload ==='All' ? allcoun : allcoun.filter((country) => {return country.continent === action.payload})
          return {
            ...state,
            countries: filterCountries,
          };

        case 'FILTER_BY_ACTIVITY':
          const filter = [];
          state.allCountries.map((count)=> count.allActivities.forEach((activity)=>{
            if(activity.name===action.payload){
              filter.push(count)
            }
          }))
          return {
            ...state,
            countries: filter
          };


        case "ORDER_BY_POPULATION": 

        const orderPop = (action.payload === "Largest") ? state.countries.sort((a,b) => a.population - b.population) :
            state.countries.sort((a,b) => b.population - a.population)

        return {
            ...state,
            countries: orderPop
        }

        case 'ORDER_BY_LETTER':
          let orderLetter = [...state.countries]
                
            if(action.payload === 'ZA'){
              orderLetter.sort((a,b)=>{
                if(a.name > b.name){
                  return -1;
                }
                if(a.name < b.name){
                  return 1
                }
                  return 0
                });
        }  else if(action.payload ==='AZ'){
              orderLetter.sort((a,b)=>{
                if(a.name > b.name){
                  return 1;
                }
                if(a.name < b.name){
                  return -1
                }
                  return 0
                });
        }
        return{
            ...state,
            countries: orderLetter
        }   
        
        default: 
        return state;
            }
  }
  

  
  export default rootReducer;
  