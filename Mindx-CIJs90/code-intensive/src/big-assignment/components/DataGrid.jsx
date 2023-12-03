import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

function DataGrid(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
           props.listExpenseInfos && props.listExpenseInfos.length > 0 &&
           props.listExpenseInfos.map((item, index) =>{
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                </tr>
              )
            })
        }
      </tbody>
    </Table>
  );
}

export default DataGrid;
