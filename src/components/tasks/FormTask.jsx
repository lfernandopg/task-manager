import React, { useContext, useEffect } from 'react'
import useForm from '../../hooks/useForm'
import ProjectContext from '../../context/project/ProjectContext'
import TaskContext from '../../context/task/TaskContext'
import { isEmptyField } from '../../helpers'

const FormTask = () => {

    const { selectedProject } = useContext(ProjectContext)
    const { selectedTask, errorFormTask, addTask, showErrorTask, updateTask, getTasks } = useContext(TaskContext)

    const { values, handleInputChange, setValues, reset } = useForm({
        name : '',
    })

    useEffect(() => {
        if (selectedTask !== null) {
            setValues({
                name : selectedTask.name
            })
        } else {
            reset()
        }
    }, [selectedTask])

    const onSubmit = e => {
        e.preventDefault()
        if (isEmptyField(values.name)) {
            showErrorTask()
            return
        }

        if (selectedTask !== null) {
            const updatedTask = {...selectedTask, name : values.name}
            updateTask(updatedTask)
        } else {
            addTask(values, selectedProject.id)
        }
        getTasks(selectedProject.id)
        reset()
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
                        onChange={handleInputChange}
                        value={values.name}    
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={selectedTask ? "Editar Tarea" : "Agregar Tarea"}
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