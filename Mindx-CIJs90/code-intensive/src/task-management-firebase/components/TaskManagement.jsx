import "./taskManager.css";
import Task from "./Task";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import {db} from '../../firebase'
import AddTask from "./AddTask";

function TaskManager() {
  // long: test1 == test2  test3 != test4
  // thinh: test1 != test2  test3 == test4

  // object, array reference type
  // const test1 = {name: 'teddy'};
  // const test2 = {name: 'teddy'};

  // const test3 = [{name: 'teddy'}];
  // const test4 = [{name: 'teddy'}];

  // const json = JSON.stringify(test3);

  // const isEqual = test1 === test2;
  // const isEqual2 = test3 === test4;
  // object, arr  prevDependency vs currentDependency
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskColRef = query(collection(db, "task-management"));
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="taskManager">
      <header>Task Manager</header>
      <div className="taskManager__container">
        <button onClick={() => setOpenAddModal(true)}>Add task +</button>
        <div className="taskManager__tasks">
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              title={task.data.title}
              description={task.data.description}
            />
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default TaskManager;
