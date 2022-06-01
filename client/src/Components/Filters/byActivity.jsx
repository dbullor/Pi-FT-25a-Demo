import React from 'react'
import { activityFilter } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

export default function FilterByActivity() {
    const dispatch = useDispatch()
    function onSelectChange(e){
      dispatch(activityFilter(e.target.value))
  }
  return (
    <select>
        <option value="All">All Activities</option>
        
      </select>
  )
}
