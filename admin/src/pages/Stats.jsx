import { CChart } from '@coreui/react-chartjs'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchDashLoading, dispatchDashSuccess } from '../Redux/reducerType'
import axios from 'axios'
import {Pie} from 'react-chartjs-2' 
import {chart as ChartJS} from 'chart.js/auto'

export default function Stats() {
  const state = useSelector((state)=>state)


const dispatch = useDispatch()
  const getdata = ()=>{
    dispatch(dispatchDashLoading())
    axios.get(`https://mock-json-server-rdn1.onrender.com/products`).then((res)=>{
      
      dispatch(dispatchDashSuccess(res.data))
    })
  }
  useEffect(()=>{ 
    getdata()
  },[])
  console.log(state.men);
 return(
  <>
  {
    state.isLoading?"":(<div className='pie'>
      <Pie  data={{
      labels: [
        "Men",
        "Women"
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [state.men, state.women],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    }} />
    </div>)
    
  }
  
  </>
 
 )
  
}
