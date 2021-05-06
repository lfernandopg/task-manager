import React, { useContext } from 'react'
import TaskContext from '../../context/task/TaskContext'

const Task = ({task}) => {

    const { deleteTask, getTask, updateTask, setEditTask } = useContext(TaskContext)

    const onClickDelete = id => {
        deleteTask(id)
        setEditTask(false)
    }
    
    const onClickEdit = id => {
        setEditTask(true)
        getTask(id)
    } 

    const onClickStatus = (id, finished) => {
        updateTask(id, {
            ...task,
            finished
        })
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
                            onClick={() => onClickStatus(task.id, false)}
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => onClickStatus(task.id, true)}
                        >Incompleto</button>
                    ) 

                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => onClickEdit(task.id)}
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