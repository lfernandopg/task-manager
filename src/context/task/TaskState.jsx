import React, { useReducer } from 'react'
import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'
import { v4 as uuid } from 'uuid';

import { 
    SET_TASKS,
    SET_TASK,
    ADD_TASK,
    SET_ERROR_FORM_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SET_EDIT_TASK
} from '../types';

const TaskState = props => {

    const initialTask = {
        id : null,
        name : '',
        finished : false,
        projectId : null
    }

    const initialState = {
        listTasks : [],
        errorFormTask : false,
        editTask : false,
        task : initialTask
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const fetchTasks = projectId => {

        let listTasks = JSON.parse(localStorage.getItem('listTasks'));
        if (listTasks) {
            const projectTasks = listTasks.filter( task => ( task.projectId === projectId))
            dispatch({
                type : SET_TASKS,
                payload : projectTasks
            })
        }
    }

    const getTask = id => {
        let listTasks = JSON.parse(localStorage.getItem('listTasks'));
        if (listTasks) {
            const [ task ] = state.listTasks.filter(task => (task.id === id) )
            dispatch({
                type : SET_TASK,
                payload : task
            })
        }
    }

    const addTask = (projectId) => {
        let listTask = JSON.parse(localStorage.getItem('listTasks'));
        if (!listTask) {
            listTask = [];
        }
        let task = {
            ...state.task, 
            id : uuid(),
            projectId : projectId
        }
        localStorage.setItem('listTasks', JSON.stringify([
            ...state.listTasks,
            task 
        ]));
        dispatch({
            type : ADD_TASK,
            payload : task
        })
    }

    const updateTask = (id, updatedTask = null) => {
        if (!updatedTask) {
            updatedTask = state.task
        }
        console.log(updatedTask)
        let listTasks = JSON.parse(localStorage.getItem('listTasks'));

        listTasks = state.listTasks.map(task => (task.id === updatedTask.id ? updatedTask : task) )
        localStorage.setItem('listTasks', JSON.stringify([...listTasks]));
        dispatch({
            type : UPDATE_TASK,
            payload : updatedTask
        })
    }

    const deleteTask = id => {

        let listTasks = JSON.parse(localStorage.getItem('listTasks'));
        listTasks = state.listTasks.filter(task => (task.id !== id) )
        localStorage.setItem('listTasks', JSON.stringify([...listTasks]));
        dispatch({
            type : DELETE_TASK,
            payload : id
        })
    }

    const setEditTask = editTask => {

        dispatch({
            type : SET_EDIT_TASK,
            payload : editTask
        })

    }

    const setTask = task => {
        dispatch({
            type : SET_TASK,
            payload : task
        })
    }

    const setErrorFormTask = errorFormTask => {
        dispatch({
            type : SET_ERROR_FORM_TASK,
            payload : errorFormTask
        })
    }

    const inputChangeTask = ({ target }) => {
        let property = target.name;
        let value = target.value;
        if (state.task.hasOwnProperty(property)) {
            dispatch({
                type : SET_TASK,
                payload : {
                    ...state.task,
                    [ property ] : value 
                }
            })
        }
    }

    const resetTask = () => {
        dispatch({
            type : SET_TASK,
            payload : initialTask
        })
    }

    return(
        <TaskContext.Provider
            value={{
                listTasks : state.listTasks,
                editTask: state.editTask,
                errorFormTask: state.errorFormTask,
                task : state.task,
                fetchTasks,
                getTask,
                addTask,
                updateTask,
                deleteTask,
                setEditTask,
                setTask,
                setErrorFormTask,
                inputChangeTask,
                resetTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState