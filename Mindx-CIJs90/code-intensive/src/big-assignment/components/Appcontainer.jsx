import React, {useState} from 'react';
import AddForm from './AddForm';
import DataGrid from './DataGrid';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Appcontainer() {
  const [listExpenseInfos, setListExpenseInfos] = useState([]);
  const [editExpenseInfo, setEditExpenseInfo] = useState(null);

  const handleAddExpenseInfo = expenseInfo =>{
    setListExpenseInfos([...listExpenseInfos, expenseInfo]);
  }

  const handleEditExpenseInfo = editExpenseInfo =>{
    setEditExpenseInfo(editExpenseInfo);
  }

  const handleEdit = editExpenseInfo =>{
    setEditExpenseInfo(null);
  }

  return (
    <div className="app-container">
        <AddForm handleAddExpenseInfo={handleAddExpenseInfo} editExpenseInfo={editExpenseInfo} handleEdit={handleEdit}/>
        <DataGrid 
          listExpenseInfos={listExpenseInfos}
          handleEditExpenseInfo={handleEditExpenseInfo}
        />
    </div>
  )
}

export default Appcontainer;