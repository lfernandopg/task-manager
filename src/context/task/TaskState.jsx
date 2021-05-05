import React, { useReducer } from 'react'
import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'
import { v4 as uuid } from 'uuid';

import { 
    GET_TASKS,
    ADD_TASK,
    ERROR_FORM_TASK,
    DELETE_TASK,
    SELECT_TASK,
    UNSELECT_TASK,
    UPDATE_TASK,
} from '../types';

let tasks =  [
    { id : 1, name : 'Elegir Plataforma', finished: true, projectId : 1 },
    { id : 2, name : 'Elegir Colores', finished: true, projectId :  2 },
    { id : 3, name : 'Elegir Hosting', finished: false, projectId : 3 }
]

const TaskState = props => {

    const initialState = {
        tasks : [],
        selectedTask : null,
        errorFormTask : false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const getTasks = (projectId) => {

        const projectTasks = tasks.filter( task => ( task.projectId === projectId))

        dispatch({
            type: GET_TASKS,
            payload: projectTasks
        })
    }

    const addTask = (task, projectId) => {
        task.id = uuid()
        task.finished = false
        task.projectId = projectId
        tasks = [...tasks, task]
        dispatch({
            type : ADD_TASK,
            payload : task
        })
    }

    const updateTask = (updatedTask) => {

        tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task) )
        dispatch({
            type : UPDATE_TASK,
            payload : tasks
        })
    }

    const deleteTask = id => {

        tasks = tasks.filter( task => (task.id !== id))
        dispatch({
            type : DELETE_TASK,
            payload : tasks
        })
    }

    const selectTask = id => {

        const [task] = tasks.filter( task => (task.id === id))

        dispatch({
            type : SELECT_TASK,
            payload : task
        })
    }

    const unselectTask = () => {
        dispatch({
            type : UNSELECT_TASK,
        })
    }


    const showErrorTask = () => {
        dispatch({
            type : ERROR_FORM_TASK,
        })
    }


    return(
        <TaskContext.Provider
            value={{
                tasks : state.tasks,
                selectedTask: state.selectedTask,
                errorFormTask: state.errorFormTask,
                getTasks,
                addTask,
                updateTask,
                deleteTask,
                selectTask,
                unselectTask,
                showErrorTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState