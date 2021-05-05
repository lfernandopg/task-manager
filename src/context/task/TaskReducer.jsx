import { 
    GET_TASKS,
    ADD_TASK,
    ERROR_FORM_TASK,
    DELETE_TASK,
    SELECT_TASK,
    UNSELECT_TASK,
    UPDATE_TASK,
} from '../types';

const TaskReducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [payload, ...state.tasks, ],
                errorFormTask: false
            }
        case ERROR_FORM_TASK:
            return {
                ...state,
                errorFormTask: true,
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: payload,
                selectedTask: null
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: payload,
                selectedTask: null
            }
        case SELECT_TASK:
            return {
                ...state,
                selectedTask: payload
            }
        case UNSELECT_TASK:
            return {
                ...state,
                selectedTask: null
            }
        default:
            return state;
    }
}

export default TaskReducer