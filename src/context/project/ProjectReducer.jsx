  
import { 
    GET_PROJECTS,
    ADD_PROJECT,
    DELETE_PROJECT,
    SELECT_PROJECT,
    UNSELECT_PROJECT,
    ERROR_FORM_PROJECT,
    SHOW_FORM_PROJECT
} from '../types';

const ProjectReducer = (state, action) => {
    const { payload, type } = action

    switch(type) {
        case SHOW_FORM_PROJECT:
            return {
                ...state,
                activeFormProject: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [payload, ...state.projects, ],
                activeFormProject: false,
                errorFormProject: false
            }
        case ERROR_FORM_PROJECT:
            return {
                ...state, 
                errorFormProject: true
            }
        case SELECT_PROJECT:
            return {
                ...state,
                selectedProject: payload
            }
        case UNSELECT_PROJECT:
            return {
                ...state,
                selectedProject: null
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: payload,
                selectedProject: null
            }
        default:
            return state;
    }
}

export default ProjectReducer