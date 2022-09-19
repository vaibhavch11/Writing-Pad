import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


function FormKit(props) {

    const [text,setText] = useState('Enter here')

    const upCase=()=>{
       let newText = text.toUpperCase();
       setText(newText);
    }

    const loCase=()=>{
        let newText = text.toLowerCase();
        setText(newText);
     }

     const clearHandle=()=>{
        setText('');
     }


    const onHandle = (event) =>{
       setText(event.target.value);
    }
  return (
    <>
    <div>

    
    <Form>
    
      <Form.Group className="mb-3 mx-4 "  controlId="exampleForm.ControlTextarea1">
        <Form.Label>{props.title}</Form.Label>
        <Form.Control as="textarea" rows={8} value={text} onChange={onHandle}/>
      </Form.Group>

    </Form>
     <Button variant="primary" onClick={upCase}>Convert to UpperCase</Button>{' '}
     <Button variant="primary" onClick={loCase}>Convert to LowerCase</Button>{' '}
     <Button variant="primary" onClick={clearHandle}>clear</Button>{' '}
 
    </div>

     <div>
        <h1>your Text Summary</h1>
        <p>Number of Characters <b>{text.length}</b></p>
        <p>Number of words <b>{text.split(" ").length}</b></p>
        <p>Time take to read <b>{text.split(" ").length * 0.008}</b></p>
     </div>
     </>
  )
}

export default FormKit