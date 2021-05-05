import React, { useContext } from 'react'
import TaskContext from '../../context/task/TaskContext'
import ProjectContext from '../../context/project/ProjectContext'

const Task = ({task}) => {

    const { selectedProject } = useContext(ProjectContext)
    const { deleteTask, getTasks, updateTask, selectTask } = useContext(TaskContext)

    const onClickDelete = id => {
        deleteTask(id)
        getTasks(selectedProject.id)
    }
    
    const onClickSelect = id => {
        selectTask(id)
    } 

    const onClickStatus = finished => {
        const updatedTask = {...task, finished}
        updateTask(updatedTask)
        getTasks(selectedProject.id)
    }

    return (  
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                { task.finished ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => onClickStatus(false)}
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => onClickStatus(true)}
                        >Incompleto</button>
                    ) 

                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => onClickSelect(task.id)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => onClickDelete(task.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}
 
export default Task;