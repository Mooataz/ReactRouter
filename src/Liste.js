import React from 'react'
import CardEL from './Components/CardEL'

 function Liste({stat}) {
  return (
    <div>{
        stat.map((el,key)=>(<CardEL el={el} stat={stat}/>))
        }</div>
  )
}
export default Liste;