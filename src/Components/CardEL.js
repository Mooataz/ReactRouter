import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import Remove from './Remove'
import {Routes, Route, Link } from "react-router-dom";
import { useEffect } from 'react';
function CardEl ({el,stat}) {
  
//export const Sub=()=>{return el};
  return (
    <div>
   
   <Card>
  <Card.Header as="h5">{el.name}</Card.Header>
  <Card.Body>
    <Card.Title>{el.rating}</Card.Title>
    <Link to='/Descrip'  el={el}> 
    <Card.Text>
      {el.description}
    </Card.Text>
    </Link>
    <Button variant="primary" onClick={<Remove d={el.id} stat={stat}/>}>Remove</Button>
  </Card.Body>
</Card>


    </div>
  )
}


export default CardEl