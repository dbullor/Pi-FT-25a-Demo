import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import{postActivity, getAllActivities, getAllCountries} from '../../Redux/Actions';
import {useDispatch, useSelector} from 'react-redux';
import validate from './validate'
import Styles from './styles.module.css'

export default function ActivitiesCards() {
const dispatch = useDispatch();
const navigate= useNavigate()
const {countries, allActivities} = useSelector((state)=>{return state})
const [errors, setErrors] = useState({})

const [input, setInput] = useState({
  name:'',
  difficulty:'',
  duration: '',
  season: '',
  countries: []
})

function handleSeason(e) {
  setInput({
      ...input,
      season: e.target.value
  })
}
function handleDifficulty(e) {
  setInput({
      ...input,
      difficulty: e.target.value
  })
}

function handleDuration(e){
  setInput({
    ...input,
    duration: e.target.value
  })
}
function handleChange(e){
  e.preventDefault()
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
  
  setErrors(validate({//seteo mi estado local errors
    ...input,
    [e.target.name]: e.target.value
  }, allActivities.map((e)=>{
    return e.name
  })
  ))
}


//maneja selección de los países
function handleSelect(e){
  setInput({
    ...input,
    countries: [...input.countries,e.target.value]
  })
}


//asociada al botón que despacha la actividad creada.
function handleSubmit(e){
  e.preventDefault();
  setErrors(validate({
    ...input,
    [e.target.value]: e.target.value
  }, allActivities.map((e)=>{
    return e.name
  })))
  dispatch(postActivity(input))
  alert('Tourist Activity created')
  setInput({
    name:'',
    difficulty:'',
    duration: '',
    season: '',
    countries: []
  })
  navigate('/home')
}


function handleDelete(el){
  setInput({
    ...input,
    countries: input.countries.filter((country)=> country !== el)
  })
}

//para que traiga actualizados los paises cada vez que entro al componente.
useEffect(()=>{
  dispatch(getAllActivities())
  dispatch(getAllCountries())
}, [dispatch])



return (
  <div className={Styles.container}>
      <div>
      <h1 className={Styles.title}>The World Waits for Us. Let's Travel!!</h1>
      <h2 className={Styles.subTitle}>Create Tourist Activity</h2>
      </div>
      <form className={Styles.form}>
        <div className={Styles.actBox}>
          <label className={Styles.name}>Name:</label>
          <input className={Styles.inputName} type="text" autoComplete="off" value={input.name} key='name' required name='name' onChange={(e)=>handleChange(e)} />

        <div>
          <label className={Styles.difficulty}>Difficulty: </label>
          <select className={Styles.barraDifficulty} onChange = {e => handleDifficulty(e)}>Difficulty
          <option value="Difficulty" key='Difficulty'>Difficulty</option>
          <option value= {1} key="1">1</option>
          <option value={2} key ="2">2</option>
          <option value={3} key ="3">3</option>
          <option value={4} key ="4">4</option>
          <option value={5} key ="5">5</option>  
        </select>
        </div>

      
        <div>
        <label className={Styles.duration}>Duration: </label>
        <select className={Styles.barraDuration} onChange = {e => handleDuration(e)}>Duration
          <option value="Duration" key="Duration">Duration</option>
          <option value="Less than 1 hour" key="1">Less than 1 hour</option>
          <option value="Less than 3 hours" key ="3">Less than 3 hours</option>
          <option value="Less than 6 hours" key ="more3">Less than 6 hours</option>
          <option value="Less than 12 hours" key ="more6">Less than 12 hours</option>
          <option value="More than 12 hours" key ="more12">More than 12 hours</option>
          
        </select>
        </div>

       
        <div>
          <label className={Styles.season}>Season: </label>
          <select className={Styles.barraSeason} onChange = {e => handleSeason(e)}>Season
            <option value="Season" key="Season">Season</option>
            <option value="Summer" key="Summer">Summer</option>
            <option value="Autumn" key ="Autumn">Autumn</option>
            <option value="Winter" key ="Winter">Winter</option>
            <option value="Spring" key ="Spring">Spring</option>        
          </select>
        </div>
         
        <label className={Styles.countries}>Countries: <select className={Styles.barraCountries} onChange={(e)=>handleSelect(e)}>
          {countries.map((c) =>(
            <option  value={c.id}>{c.name}</option>
            ))}
        </select></label>
        <Link to='/home'>
          <button className={Styles.btnBack}>Back</button>
        </Link>
        {errors.name || !input.name || input.countries.length=== 0
        
        ? <button className={Styles.btnCreate} type="submit"   disabled={true}>Create Activity</button> : 
        <button type="submit" onClick={(e)=> handleSubmit(e)} >Create Activity</button>}
      {errors.name && (
        <p className={Styles.errorName}>{errors.name}</p>
        )}
      </div>
      </form>
      {
        input.countries.map(el=>
          <div className={Styles.ext}>
            <div className={Styles.chosenCountry}>
              <div className={Styles.idCountry}>{el}</div>
              <button className={Styles.btnDelete}  onClick={()=>handleDelete(el)}>X</button>
            </div>
          </div>
        )
      }
    </div>
  )
}


