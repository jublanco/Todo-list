import React from 'react';

export const VisibilityControl = props => {
    return(
        <div className="form-check">
            <input 
                type="checkbox"
                className="form-check-input"
                checked={props.isChecked}
                onChange={e => props.callback(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                <h5>Tareas completadas ({props.taskItems.filter(t => t.done).length} tareas terminadas)</h5>
            </label>
        </div>
    ) 
}