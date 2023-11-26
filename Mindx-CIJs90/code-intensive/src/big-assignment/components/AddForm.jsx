import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddForm() {
  const initData = {name: '', amount: '', date: ''};
  const [isAdded, setIsAdded] = useState(false);
  const [expenseInfo, setexpenseInfo] = useState(initData);
  const {name, amount, date} = expenseInfo;

  const handleChange = event =>{
    const {name, value} = event.target;
    setexpenseInfo({...expenseInfo, [name]: value});
  };
  
  const handleAdd = () =>{
    console.log(name);
    if(!name || !amount || !date){
      toast.error('empty name, please input name!')
    }else{
      setexpenseInfo(initData);
    }
  }

  const handleChangeStatusAdd = () => setIsAdded(prev => !prev);

  const handleCancel = () =>{
    handleChangeStatusAdd();
    setexpenseInfo(initData);
  }

  return (
    <div className='add-form'>
      {
        !isAdded ? <Button
          onClick={() => handleChangeStatusAdd()}>Add Expense
        </Button> :
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">Name</Form.Label>
              <Col sm="10">
                <Form.Control 
                    type='text' id="name" name="name"
                    value={name} placeholder="Enter name here"
                    onChange={handleChange}
                  />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"> Amount</Form.Label>
              <Col sm="10">
                <Form.Control 
                  id="amount" name="amount" 
                  type="number" value={amount} placeholder="Enter amount here"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"> Date</Form.Label>
              <Col sm="10">
                <Form.Control id="date" 
                name="date" type="text" 
                value={date} placeholder="dd/mm/yyy" 
                onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Button className="add-btn" onClick={handleAdd}>Add</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Form>
      }
      <ToastContainer position="top-center"/>
    </div>
  )
};
