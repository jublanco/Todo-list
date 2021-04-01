import React, { useState, useEffect } from 'react';
import { TaskRow } from './componentes/TaskRow.js'
import{ TaskBanner } from './componentes/TaskBanner.js'
import{TaskCreator} from './componentes/TaskCreator'
import{VisibilityControl} from './componentes/VisibilityControl'

function App() {

  const [userName, setUserName] = useState('Luana');
  const [taskItems, setTaskItems] = useState([
    { name: 'Ir al doctor', done: false },
    { name: 'Ir de compras', done: false },
    { name: 'Clase de Zoom', done: true },
    { name: 'Ir al gimnasio', done: false },
  ])
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data != null){
      setTaskItems(JSON.parse(data));
    }else {
      setUserName('Luana')
      setTaskItems([
        { name: 'Ir al doctor', done: false },
        { name: 'Ir de compras', done: false },
        { name: 'Clase de Zoom', done: true },
        { name: 'Ir al gimnasio', done: false }
      ])
      setShowCompleted(true);
    }
  }, [])

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(taskItems));
    }, [taskItems])
  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, {name: taskName, done:false}])
    }
  }

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))

  const taskTableRows = (doneValue) => 
    taskItems
    .filter(task => task.done === doneValue)
    .map(task => (
    <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
  ))

  return (
    <div>
      <TaskBanner userName = {userName} taskItems={taskItems}/>
      <TaskCreator callback={createNewTask}/>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Terminadas</th>
          </tr>
        </thead>

        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>

    <div className="bg-danger text-white text-center p-2">
      <VisibilityControl 
        taskItems={taskItems}
        isChecked = {showCompleted}
        callback = {checked => setShowCompleted(checked)}
      />
    </div>

    {
      showCompleted && (
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Terminada</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(true)}
          </tbody>
        </table>
      )
    }
    </div>
  );
}

export default App;
