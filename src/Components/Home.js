import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import Liste from '../Liste';
import { InputGroup,FormControl,Button,Form } from 'react-bootstrap';
import { Data } from '../Data';
import { useState } from 'react';


import Descrip from './Descrip';
function Home() {

    const [state,setState]=useState(Data);
    var st=state;
  
  const [title,setTitle]=useState();
  const [url,setUrl]=useState();
  const [desc,setDesc]=useState();
  const [rat,setRat]=useState();
  
  const [fname,setFname]=useState();
  const [frating,setFrating]=useState();
  const Ajouter=(e)=>{
    e.preventDefault()
    setState([...state,{
            id:Math.random(),
            image: url,
            rating:rat ,
            description: desc,
             date: 100,
             name:title}])
            alert('Insert done')
            }
           const Delete=(e)=>{ 
              e.preventDefault()
              setState(state.filter( filt=>filt.id!== e )) 
              alert('Delete avec success')
            }
            const Trie=(e)=>{ 
                e.preventDefault()
                setState(state.filter( filt=>filt.name!== fname  && filt.rating!==frating)) }
  return (
    <div>
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header >Add Movies</Accordion.Header>
    <Accordion.Body>
    <Accordion.Item eventKey="0">
    <Accordion.Header></Accordion.Header>
    <Accordion.Body>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Title of movie</InputGroup.Text>
    <FormControl
      placeholder="Title"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setTitle(e.target.value)}
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
     Poster URL
    </InputGroup.Text>
    <FormControl 
    id="basic-url"
    aria-describedby="basic-addon3" 
    placeholder=" https://example.com/users/"
    onChange={(e)=>setUrl(e.target.value)}
    />
  </InputGroup>
  <InputGroup>
    <InputGroup.Text>Description</InputGroup.Text>
    <FormControl 
    as="textarea" 
    aria-label="Description for movies" 
    placeholder="Description for movies"
    onChange={(e)=>setDesc(e.target.value)}
    />
  </InputGroup>
  <>
  <Form.Label>Rating</Form.Label>
  <Form.Range  max='5' width='10%' onChange={(e)=>setRat(e.target.value)}/>
</>
<Button type="button" onClick={Ajouter} >Add to list</Button>

    </Accordion.Body>
  </Accordion.Item>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Filtred movies</Accordion.Header>
    <Accordion.Body>
Filtred by : <br/><br/>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Title of movie</InputGroup.Text>
    <FormControl
      placeholder="Title"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setFname(e.target.value)}
    />
  </InputGroup>
    <>
  <Form.Label>Rating</Form.Label>
  <Form.Range  max='5' width='10%'  onChange={(e)=>setFrating(e.target.value)}/>
</>
<Button type="button" onClick={Trie} >Filter</Button>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Liste stat={st}/>
    </div>
  )
}

export default Home