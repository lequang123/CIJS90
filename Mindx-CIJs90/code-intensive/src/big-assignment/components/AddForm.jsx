import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

export default function AddForm(props) {
  const initData = {name: '', amount: '', date: '', id: uuidv4()};
  const [isAdded, setIsAdded] = useState(false);
  const [expenseInfo, setExpenseInfo] = useState(initData);
  const {name, amount, date} = expenseInfo;

  const handleChange = event =>{
    const {name, value} = event.target;
    setExpenseInfo({...expenseInfo, [name]: value, id: uuidv4()});
  };
  
  const handleAdd = () =>{
    if(!name || !amount || !date){
      toast.error('empty name, please input name!')
    }else{
      props.handleAddExpenseInfo(expenseInfo);
      setExpenseInfo(() => {
        return expenseInfo;
      });

      setExpenseInfo(initData);
    }
  }

  const handleChangeStatusAdd = () => setIsAdded(prev => !prev);

  const handleCancel = () =>{
    handleChangeStatusAdd();
    setExpenseInfo(initData);
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
