import React, { useContext } from 'react'
import ProjectContext from '../../context/project/ProjectContext'
import TaskContext from '../../context/task/TaskContext'
import { isEmptyField } from '../../helpers'

const FormTask = () => {

    const { selectedProject } = useContext(ProjectContext)
    const { 
        editTask,
        errorFormTask, 
        addTask, 
        setErrorFormTask,
        setEditTask, 
        updateTask,
        task,
        inputChangeTask,
        resetTask
    } = useContext(TaskContext)

    const onSubmit = e => {
        e.preventDefault()
        if (isEmptyField(task.name)) {
            setErrorFormTask(true)
            return
        }

        if (editTask) {
            updateTask(task.id)
        } else {
            addTask(selectedProject.id)
        }
        setEditTask(false)
        resetTask()
    }

    if (!selectedProject) {
        return null
    }

    return (  
        <div className="formulario">
            <form 
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="name"
                        onChange={inputChangeTask}
                        value={task.name}    
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={editTask ? "Editar Tarea" : "Agregar Tarea"}
                    /> 
                </div>
            </form>

            { errorFormTask ?

                (<p className="error mensaje">El nombre de la tarea es obligatorio</p>)
            :
                null
            }
        </div>
    );
}
 
export default FormTask;