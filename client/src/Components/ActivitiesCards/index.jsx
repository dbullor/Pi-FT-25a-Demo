import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import{postActivity, getAllActivities, getAllCountries} from '../../Redux/Actions';
import {useDispatch, useSelector} from 'react-redux';
import validate from './validate';







export default function ActivitiesCards() {
const dispatch = useDispatch();
const navigate= useNavigate()
const {allCountries} = useSelector((state)=>{return state})
const [errors, setErrors] = useState({})

const [input, setInput] = useState({
  name:'',
  difficulty:'',
  duration: '',
  season: '',
  countries: []
})

function handleChange(e){
  e.preventDefault()
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
  setErrors(validate({//seteo mi estado local errors
    ...input,
    [e.target.name]: e.target.value
  }))
}
function handleCheck(e){
  if(e.target.checked){
    setInput({
      ...input,
      difficulty:e.target.value
    })
  }
}

function handleSelect(e){
  setInput({
    ...input,
    countries: [...input.countries,e.target.value]
  })
}

function handleSubmit(e){
  e.preventDefault();
  if(input.name && input.difficulty && input.duration && input.season && input.countries.length > 0){
  dispatch(postActivity(input))
  alert('Tourist Activity created')
  setInput({
    name:'',
  difficulty:'',
  duration: '',
  season: '',
  countries: []
  })}
  navigate('/home')
}

function handleDelete(el){
  setInput({
    ...input,
    countries: input.countries.filter((country)=> country !== el)
  })
}

useEffect(()=>{
  dispatch(getAllActivities())
  dispatch(getAllCountries())
}, [dispatch])


  return (
    <div>
      <div>
      <h1>The World waits for Us. Let's travel!!</h1>
      <h2>Create Tourist Activity</h2>
        
      </div>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input type="text" autoComplete="off" value={input.name} key='name' required name='name' onChange={(e)=>handleChange(e)} />
          {errors.name && (
            <p className='error'>{errors.name}</p>
          )}
        </div>

        <div>
          <label>Difficulty: </label>
          <select onChange = {e => handleChange(e)}>Difficulty
          <option value="1" key="1">Easy</option>
          <option value="2" key ="2">Gentle</option>
          <option value="3" key ="3">Moderate</option>
          <option value="4" key ="4">Demanding</option>
          <option value="5" key ="5">Strenuous</option>  
        </select>
        </div>

        <div>
        <label>Duration: </label>
        <select onChange = {e => handleChange(e)}>Duration
        
          <option value="1" key="1">Less than 1 hour</option>
          <option value="3" key ="3">Less than 3 hours</option>
          <option value="more3" key ="more3">Less than 3 hours</option>
          <option value="more6" key ="more6">Less than 3 hours</option>
          <option value="more12" key ="more12">More than 12 hours</option>
          
        </select>
        </div>

        <div>
          <label>Season: </label>
          <select onChange = {e => handleChange(e)}>Season
        
          <option value="Summer" key="Summer">Summer</option>
          <option value="Autumn" key ="Autumn">Autumn</option>
          <option value="Winter" key ="Winter">Winter</option>
          <option value="Spring" key ="Spring">Spring</option>
          <option value="All year" key ="All year">All year</option>
          
        </select>
        </div>
        <select onChange={(e)=>handleSelect(e)}>
          {allCountries.map((c) =>(
            <option value={c.name}>{c.name}</option>
          ))}
        </select>
        {errors.name || !input.name
        
         ? <button type="submit" disabled={true}>Create Activity</button> : 
        <button type="submit" >Create Activity</button>}
        
         
      </form>
      {
        input.countries.map(el=>
          <div className='deleteCountries'>
            <p>{el}</p>
            <button className='btnDelete'  onClick={()=>handleDelete(el)}>X</button>
          </div>
        )
      }
      <Link to='/home'>
        <button>Back</button>
      </Link>
    </div>
  )
}



