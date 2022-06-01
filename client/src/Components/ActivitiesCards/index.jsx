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
      <Link to='/home'>
        <button>Back</button>
      </Link>
      <h1>Create Activity</h1>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input type="text" autoComplete="off" value={input.name} key='name' required name='name' onChange={(e)=>handleChange(e)} />
          {errors.name && (
            <p className='error'>{errors.name}</p>
          )}
        </div>
        <div>
          <label>Difficulty</label>
          <label>
            <input type="checkbox" name='1' value='1' onChange={(e)=>handleCheck(e)}/>1
          </label>
          <label>
            <input type="checkbox" name='2' value='2' onChange={(e)=>handleCheck(e)}/>2
          </label>
          <label>
            <input type="checkbox" name='3' value='3' onChange={(e)=>handleCheck(e)}/>3
          </label>
          <label>
            <input type="checkbox" name='4' value='4' onChange={(e)=>handleCheck(e)}/>4
          </label>
          <label>
            <input type="checkbox" name='5' value='5' onChange={(e)=>handleCheck(e)}/>5
          </label>
        </div>
        <div>
        <label>Duration: </label>
        <select onChange = {e => handleChange(e)}>Duration
        
          <option value="1" key="1">Menor a 1 Hour</option>
          <option value="3" key ="3">Menor a 3 Hours</option>
          <option value="more3" key ="more3">Menor a 6 Hours</option>
          <option value="more6" key ="more6">Menor a 12 Hours</option>
          <option value="more12" key ="more12">Mayor a 12 Hours</option>
          
        </select>
        </div>

        <div>
          <label>Season</label>
          <label>
            <input type="checkbox"   name='Summer' value='Summer'/>Summer
          </label>
          <label>
            <input type="checkbox" name='Autumn' value='Autumn'/>Autumn
          </label>
          <label>
            <input type="checkbox" name='Winter' value='Winter'/>Winter
          </label>
          <label>
            <input type="checkbox" name='Spring' value='Spring'/>Spring
          </label>
          <label>
            <input type="checkbox" name='AllYear' value='AllYear'/>All year
          </label>
        </div>
        <select onChange={(e)=>handleSelect(e)}>
          {allCountries.map((c) =>(
            <option value={c.name}>{c.name}</option>
          ))}
        </select>
        {errors.name || !input.name ? <button type="submit" disabled={true}>Create Activity</button>: 
        <button type="submit" >Create Activity</button>}
        {/* <ul><li>{input.countries.map(el => el + ' ,')}</li></ul> */}
         
      </form>
      {
        input.countries.map(el=>
          <div className='deleteCountries'>
            <p>{el}</p>
            <button className='btnDelete'  onClick={()=>handleDelete(el)}>X</button>
          </div>
        )
      }
    </div>
  )
}



