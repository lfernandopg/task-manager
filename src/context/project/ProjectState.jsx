import React, { useReducer } from 'react'
import ProjectContext from './ProjectContext'
import ProjectReducer from './ProjectReducer'
import { v4 as uuid } from 'uuid';
import { 
    SET_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    SELECT_PROJECT,
    UNSELECT_PROJECT,
    SET_ERROR_FORM_PROJECT,
    SET_EDIT_PROJECT,
    SET_PROJECT,
    SET_ACTIVE_FORM_PROJECT
} from '../types';

const ProjectState = props => {

    const initialProject = {
        id : null,
        name : ''
    }

    const initialState = {
        listProjects : [],
        selectedProject : null,
        activeFormProject : false,
        errorFormProyect : false,
        editProject : false,
        project : initialProject
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    const fetchProjects = () => {
        let listProjects = JSON.parse(localStorage.getItem('listProjects'));
        if (listProjects) {
            dispatch({
                type : SET_PROJECTS,
                payload : listProjects
            })
        }
    }

    const getProject = id => {
        let listProjects = JSON.parse(localStorage.getItem('listProjects'));
        if (listProjects) {
            const [ project ] = state.listProjects.filter(project => (project.id === id) )
            dispatch({
                type : SET_PROJECT,
                payload : project
            })
        }
    }

    const addProject = () => {
        let listProjects = JSON.parse(localStorage.getItem('listProjects'));
        if (!listProjects) {
            listProjects = [];
        }
        let project = {
            ...state.project, 
            id : uuid()
        }
        localStorage.setItem('listProjects', JSON.stringify([
            ...listProjects,
            project 
        ]));
        dispatch({
            type : ADD_PROJECT,
            payload : project
        })
    }

    const updateProject = id => {
        let listProjects = JSON.parse(localStorage.getItem('listProjects'));
        listProjects = state.listProjects.map(project => (project.id === state.project.id ? state.project : project) )
        localStorage.setItem('listProjects', JSON.stringify([...listProjects]));
        dispatch({
            type : UPDATE_PROJECT,
            payload : state.project
        })
    }

    const deleteProject = id => {

        let listProjects = JSON.parse(localStorage.getItem('listProjects'));
        listProjects = state.listProjects.filter(project => (project.id !== id) )
        localStorage.setItem('listProjects', JSON.stringify([...listProjects]));
        dispatch({
            type : DELETE_PROJECT,
            payload : id
        })
    }

    const selectProject = id => {

        const [ project ] = state.listProjects.filter(project => (project.id === id) )

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

    const setErrorFormProject = errorFormProyect => {
        dispatch({
            type : SET_ERROR_FORM_PROJECT,
            payload : errorFormProyect
        })
    }

    const setEditProject = editProject => {

        dispatch({
            type : SET_EDIT_PROJECT,
            payload : editProject
        })

    }

    const setProject = project => {
        dispatch({
            type : SET_PROJECT,
            payload : project
        })
    }

    const setActiveFormProject = activeFormProject => {
        dispatch({
            type: SET_ACTIVE_FORM_PROJECT,
            payload : activeFormProject
        })
    }

    const inputChangeProject = ({ target }) => {
        let property = target.name;
        let value = target.value;
        if (state.project.hasOwnProperty(property)) {
            dispatch({
                type : SET_PROJECT,
                payload : {
                    ...state.project,
                    [ property ] : value 
                }
            })
        }
    }

    const resetProject = () => {
        dispatch({
            type : SET_PROJECT,
            payload : initialProject
        })
    }

    return(
        <ProjectContext.Provider
            value={{
                listProjects : state.listProjects,
                activeFormProject: state.activeFormProject,
                errorFormProyect: state.errorFormProyect,
                selectedProject : state.selectedProject,
                editProject : state.editProject,
                project : state.project,
                fetchProjects,
                getProject,
                addProject,
                updateProject,
                selectProject,
                unselectProject,
                deleteProject,
                setActiveFormProject,
                setErrorFormProject,
                setEditProject,
                setProject,
                inputChangeProject,
                resetProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
