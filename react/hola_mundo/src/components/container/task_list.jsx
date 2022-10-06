import React from 'react';
//import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    const defaultTask = new Task('example', 'default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('lol');
    }

    return (
        <div>
            <div>
                <h1>Your task:</h1>
            </div>
            {/*TODO: aplicar un map para renderizar las listas de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
