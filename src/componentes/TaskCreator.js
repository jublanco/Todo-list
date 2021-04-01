import React, {useState} from 'react';

export const TaskCreator = props => {

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName('');
    }

    return (
        <div className="my-1">
            <input 
            type="text"
            className="form-control text-center bg-danger text-white"
            value={newTaskName}
            onChange={updateNewTaskValue}
            />
            <button className="btn btn-danger mt-1 ml-5 w-50 align-self-center" onClick={createNewTask}>
                Agregar
            </button>
        </div>
    )
}