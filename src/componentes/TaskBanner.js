import React from 'react';

export const TaskBanner = props => (
    <h4 className="bg-danger text-white text-center p-4">
        Tareas de {props.userName} ({props.taskItems.filter(t => !t.done).length} tareas por hacer)
    </h4>
)