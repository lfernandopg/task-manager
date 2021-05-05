import React, { useReducer } from 'react'
import ProjectContext from './ProjectContext'
import ProjectReducer from './ProjectReducer'
import { v4 as uuid } from 'uuid';
import { 
    GET_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    SELECT_PROJECT,
    UNSELECT_PROJECT,
    ERROR_FORM_PROJECT,
    SHOW_FORM_PROJECT
} from '../types';

let projects = [
    { id : 1 , name : 'Tienda Virutal' },
    { id : 2, name : 'Trading Manager' },
    { id : 3 , name : 'My Daily Milf' }
]


const ProjectState = props => {


    const initialState = {
        projects : [],
        selectedProject : null,
        activeFormProject : false,
        errorFormProyect : false
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    const showFormProject = () => {
        dispatch({
            type: SHOW_FORM_PROJECT
        })
    }

    const getProjects = () => {

        dispatch({
            type : GET_PROJECTS,
            payload : projects
        })
    }

    const addProject = project => {
        project.id = uuid();
        projects = [project, ...projects, ]
        dispatch({
            type : ADD_PROJECT,
            payload : project
        })
    }

    
    const updateProject = (updatedProject) => {

        projects = projects.map(project => (project.id === updatedProject.id ? updatedProject : project) )
        dispatch({
            type : UPDATE_PROJECT,
            payload : projects
        })
    }

    const deleteProject = id => {

        projects = projects.filter( project => (project.id !== id))
        dispatch({
            type : DELETE_PROJECT,
            payload : projects
        })
    }

    const selectProject = id => {

        const [project] = projects.filter( project => (project.id === id))

        dispatch({
            type : SELECT_PROJECT,
            payload : project
        })

    }

    const unselectProject = () => {
        dispatch({
            type : UNSELECT_PROJECT,
        })
    }

    const showErrorProject = () => {
        dispatch({
            type : ERROR_FORM_PROJECT,
        })
    }

    return(
        <ProjectContext.Provider
            value={{
                projects : state.projects,
                activeFormProject: state.activeFormProject,
                errorFormProyect: state.errorFormProyect,
                selectedProject : state.selectedProject,
                showFormProject,
                getProjects,
                addProject,
                updateProject,
                showErrorProject,
                selectProject,
                unselectProject,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
