import React, { Fragment, useContext } from 'react'
import useForm from '../../hooks/useForm'
import { isEmptyField } from '../../helpers'
import ProjectContext from '../../context/project/ProjectContext'

const FormProject = () => {

    const { activeFormProject, errorFormProject, showFormProject, addProject, showErrorProject  } = useContext(ProjectContext)

    const { values, handleInputChange, reset } = useForm({
        name : '',
    })


    const onSubmit = (e) => {
        e.preventDefault()
        if (isEmptyField(values.name)) {
            showErrorProject()
            return
        }
        addProject(values)
        reset()
    }

    return (
        <Fragment>            
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={ () => showFormProject() }
        >Nuevo Proyecto</button>
        { activeFormProject ?
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
                    onChange={handleInputChange}
                    value={values.name}
                />
                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
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