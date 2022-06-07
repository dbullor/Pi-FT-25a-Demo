
  // const initialState = {
  //   allCountries: [],
  //   countries: [],
  //   allActivities: [],
  //   countryId: {}

  // };
  
  // const rootReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     //  Traigo datos del back y los guarda en dos estados.
  //       case 'GET_ALL_COUNTRIES':
  //       return { 
  //         ...state, 
  //         allCountries: action.payload, 
  //         countries: action.payload
  //       };
    
  //       //toma el país que buscó el usuario en el search bar
  //       case 'GET_COUNTRY_NAME':
  //         const country = [];
  //         if(!action.payload.name){
  //           return "This Country doesn't exist"
  //         } else{
  //           country.push(action.payload)
  //         }
  //         return { 
  //         ...state, 
  //         countries: country
  //       };

  //       //trae las actividades y las guarda en el store
  //       case 'GET_ALL_ACTIVITIES':
  //           return {
  //           ...state, 
  //           allActivities: action.payload
  //         };

  //       //Retorna el mismo state cuando se hace un nuevo post.
  //       case 'POST_ACTIVITY':
  //           return {
  //           ...state,  
  //         };

  //         //guarda el pais al que se le piden más detalles
  //       case 'GET_COUNTRY_DETAILS':
  //           return {
  //           ...state, 
  //           countryId: action.payload 
  //         };

         
  //       case 'FILTER_BY_CONTINENT':
  //         const allcoun = state.allCountries;
  //         const filterCountries = action.payload ==='All' ? allcoun : allcoun.filter((country) => {return country.continent === action.payload})
  //         return {
  //           ...state,
  //           countries: filterCountries,
  //         };

  //       case 'FILTER_BY_ACTIVITY':
  //         //filtro los que tienen al menos 1 actividad
  //         const actFiltered = state.allCountries.filter((count) => {return count.activities.length > 0})
          
  //        //almaceno las actividades en el array
  //         const activities = [];
          
  //         const filterActivities = action.payload ==='All' ? state.allCountries : activities;
  //         for(let i=0; i<actFiltered.length; i++){//recorro los paises que tienen al menos una actividad
  //           for(let j=0; j<actFiltered[i].activities.length; j++){//recorro las actividades del pais[i]
  //             if(actFiltered[i].activities[j].name===action.payload){
  //               activities.push(actFiltered[i])
  //             }
  //           }
  //         }
  //         return{
  //           ...state, 
  //           countries: filterActivities
  //         }
          


  //       case "ORDER_BY_POPULATION": 

  //       const orderPop = (action.payload === "Largest") ? state.countries.sort((a,b) => a.population - b.population) :
  //           state.countries.sort((a,b) => b.population - a.population)

  //       return {
  //           ...state,
  //           countries: orderPop
  //       }

  //       case 'ORDER_BY_LETTER':
  //         let orderLetter = [...state.countries]
                
  //           if(action.payload === 'ZA'){
  //             orderLetter.sort((a,b)=>{
  //               if(a.name > b.name){
  //                 return -1;
  //               }
  //               if(a.name < b.name){
  //                 return 1
  //               }
  //                 return 0
  //               });
  //       }  else if(action.payload ==='AZ'){
  //             orderLetter.sort((a,b)=>{
  //               if(a.name > b.name){
  //                 return 1;
  //               }
  //               if(a.name < b.name){
  //                 return -1
  //               }
  //                 return 0
  //               });
  //       }
  //       return{
  //           ...state,
  //           countries: orderLetter
  //       }   
        
  //       default: 
  //       return state;
  //           }
  // }
  

  
  // export default rootReducer;
  
  
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

          //filtro los que tienen al menos 1 actividad
          const actFiltered = state.allCountries.filter((count) => {return count.activities.length > 0})
          
         //almaceno las actividades en el array
          const activities = [];
          
          const filterActivities = action.payload ==='All' ? state.allCountries : activities;
          for(let i=0; i<actFiltered.length; i++){
            for(let j=0; j<actFiltered[i].activities.length; j++){
              if(actFiltered[i].activities[j].name===action.payload){
                activities.push(actFiltered[i])
              }
            }
          }
          
          return{
            ...state, 
            countries: filterActivities
          }
          


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