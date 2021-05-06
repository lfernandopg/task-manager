import React, { Fragment, useContext } from 'react'
import { isEmptyField } from '../../helpers'
import ProjectContext from '../../context/project/ProjectContext'

const FormProject = () => {

    const { 
        editProject, 
        activeFormProject, 
        errorFormProject, 
        setActiveFormProject, 
        addProject, 
        setErrorFormProject,
        setEditProject,
        updateProject,
        inputChangeProject,
        resetProject,
        project
    } = useContext(ProjectContext)

    const onSubmit = (e) => {
        e.preventDefault()

        if (isEmptyField(project.name)) {
            setErrorFormProject(true)
            return
        }

        if (editProject) {
            updateProject(project.id)
        } else {
            addProject()
        }
        setEditProject(false)
        setActiveFormProject(false)
        resetProject()
    }

    return (
        <Fragment>            
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={ () => setActiveFormProject(true) }
        >Nuevo Proyecto</button>
        { (activeFormProject || editProject) ?
            (
            <form 
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmit}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre del proyecto"
                    name="name"
                    onChange={inputChangeProject}
                    value={project.name}
                />
                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value={ editProject ? "Editar Proyecto" : "Agregar Proyecto" }
                />
            </form>
            )
        :
            null
        }

        { errorFormProject ?
            <p className="mensaje error"> El nombre del proyecto es obligatorio</p>
        :
            null
        }
        </Fragment>
    );
}
 
export default FormProject;