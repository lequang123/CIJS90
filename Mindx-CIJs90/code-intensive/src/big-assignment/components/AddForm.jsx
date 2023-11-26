import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

export default function AddForm() {
  const [isAdded, setisAdded] = useState(false);
  console.log(isAdded);

  console.log('orgin master')
  return (
    <div>
      {
        !isAdded ? <Button className='btn-add'
          onClick={() => setisAdded(prev => !prev)}>Add Expense
        </Button> :
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">Name</Form.Label>
              <Col sm="10">
                <Form.Control type='text' id="name" name="name" placeholder="Enter name here" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"> Amount</Form.Label>
              <Col sm="10">
                <Form.Control id="amount" name="amount" type="number" placeholder="Enter amount here" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"> Date</Form.Label>
              <Col sm="10">
                <Form.Control id="date" name="date" type="text" placeholder="dd/mm/yyy" />
              </Col>
            </Form.Group>
            <Button className="pr-2">Add</Button>
            <Button>Cancel</Button>
          </Form>
      }

    </div>
  )
};
