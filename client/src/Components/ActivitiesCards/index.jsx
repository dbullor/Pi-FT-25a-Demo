import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import{postActivity, getAllActivities, getAllCountries} from '../../Redux/Actions';
import {useDispatch, useSelector} from 'react-redux';
import validate from './validate'
import Styles from './styles.module.css'

export default function ActivitiesCards() {
const dispatch = useDispatch();
const navigate= useNavigate()
const {countries} = useSelector((state)=>{return state})
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
  }))
}


function handleSelect(e){
  setInput({
    ...input,
    countries: [...input.countries,e.target.value]
  })
}

function handleSubmit(e){
  e.preventDefault();
  setErrors(validate({
    ...input,
    [e.target.value]: e.target.value
  }))
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

useEffect(()=>{
  dispatch(getAllActivities())
  dispatch(getAllCountries())
}, [dispatch])



  return (
    <div className={Styles.container}>
      <div>
      <h1>The World waits for Us. Let's travel!!</h1>
      <h2>Create Tourist Activity</h2>
      </div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" autoComplete="off" value={input.name} key='name' required name='name' onChange={(e)=>handleChange(e)} />
          {errors.name && (
            <p className='error'>{errors.name}</p>
          )}
        </div>

        <div>
          <label>Difficulty: </label>
          <select onChange = {e => handleDifficulty(e)}>Difficulty
          <option value= {1} key="1">1</option>
          <option value={2} key ="2">2</option>
          <option value={3} key ="3">3</option>
          <option value={4} key ="4">4</option>
          <option value={5} key ="5">5</option>  
        </select>
        </div>

        <div>
        <label>Duration: </label>
        <select onChange = {e => handleDuration(e)}>Duration
          <option value="Less than 1 hour" key="1">Less than 1 hour</option>
          <option value="Less than 3 hours" key ="3">Less than 3 hours</option>
          <option value="Less than 6 hours" key ="more3">Less than 6 hours</option>
          <option value="Less than 12 hours" key ="more6">Less than 12 hours</option>
          <option value="More than 12 hours" key ="more12">More than 12 hours</option>
          
        </select>
        </div>

        <div>
          <label>Season: </label>
          <select onChange = {e => handleSeason(e)}>Season
          <option value="Summer" key="Summer">Summer</option>
          <option value="Autumn" key ="Autumn">Autumn</option>
          <option value="Winter" key ="Winter">Winter</option>
          <option value="Spring" key ="Spring">Spring</option>
          
        </select>
        </div>
        <label>Countries: <select onChange={(e)=>handleSelect(e)}>
          {countries.map((c) =>(
            <option  value={c.id}>{c.name}</option>
          ))}
        </select></label>
        {errors.name || !input.name || input.countries.length=== 0
        
         ? <button type="submit"   disabled={true}>Create Activity</button> : 
        <button type="submit" onClick={(e)=> handleSubmit(e)} >Create Activity</button>}
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



