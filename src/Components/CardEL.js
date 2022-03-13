import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import Remove from './Remove'

export default function CardEl({el,stat}) {

  return (
    <div>
    <Card>
  <Card.Header as="h5">{el.name}</Card.Header>
  <Card.Body>
    <Card.Title>{el.rating}</Card.Title>
    <Card.Text>
      {el.description}
    </Card.Text>
    <Button variant="primary" onClick={<Remove d={el.id} stat={stat}/>}>Remove</Button>
  </Card.Body>
</Card>

    </div>
  )
}
