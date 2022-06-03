import React from 'react'
import { activityFilter, getAllActivities } from '../../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux';
import Styles from './styles.module.css';
import { useEffect } from 'react';


export default function FilterByActivity() {
    const dispatch = useDispatch()
    const allActivities = useSelector((state) => state.allActivities);
    useEffect(()=>{
      dispatch(getAllActivities())
    }, [dispatch]);

    function handleChange(e){
      dispatch(activityFilter(e.target.value));
  }

  return (
    <div>
      
      <select className={Styles.activity} onChange={(e)=> handleChange(e)}>
        <option value='All'>Select Activity</option>
        {allActivities?.map((e)=>{return <option key={e.id} value={e.name}>{e.name}</option>})}
        </select>
    </div>
  )
}
