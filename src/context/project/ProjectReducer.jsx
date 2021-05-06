  
import { 
    SET_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    SELECT_PROJECT,
    UNSELECT_PROJECT,
    SET_ERROR_FORM_PROJECT,
    SET_EDIT_PROJECT,
    SET_ACTIVE_FORM_PROJECT,
    SET_PROJECT
} from '../types';

const ProjectReducer = (state, action) => {
    const { payload, type } = action

    switch(type) {
        case SET_PROJECTS:
            return {
                ...state,
                listProjects : [...payload]
            }
        case SET_PROJECT: 
            return {
                ...state,
                project : {...payload}
            }
        case UPDATE_PROJECT:
            return {
                ...state,
                listProjects : state.listProjects.map(project => project.id === payload.id ? payload : project )
            }
        case ADD_PROJECT:
            return {
                ...state,
                listProjects: [payload, ...state.listProjects ]
            }
        case SET_ERROR_FORM_PROJECT:
            return {
                ...state, 
                errorFormProject: payload
            }
        case SELECT_PROJECT:
            return {
                ...state,
                selectedProject: {...payload}
            }
        case UNSELECT_PROJECT:
            return {
                ...state,
                selectedProject: null
            }
        case DELETE_PROJECT:
            return {
                ...state,
                listProjects : state.listProjects.filter(project => (project.id !== payload) )
            }
        case SET_EDIT_PROJECT: 
            return {
                ...state,
                editProject: payload
            }
        case SET_ACTIVE_FORM_PROJECT:
            return {
                ...state,
                activeFormProject: payload
            }
        default:
            return state;
    }
}

export default ProjectReducer