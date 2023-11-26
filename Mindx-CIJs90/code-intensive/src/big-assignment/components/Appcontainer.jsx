import React from 'react';
import AddForm from './AddForm';
import DataGrid from './DataGrid';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Appcontainer() {
  return (
    <div className="app-container">
        <AddForm />
        <DataGrid />
    </div>
  )
}

export default Appcontainer