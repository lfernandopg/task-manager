import { 
    SET_TASKS,
    SET_TASK,
    ADD_TASK,
    SET_ERROR_FORM_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SET_EDIT_TASK
} from '../types';

const TaskReducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case SET_TASKS:
            return {
                ...state,
                listTasks: [...payload]
            }
        case ADD_TASK:
            return {
                ...state,
                listTasks: [ payload, ...state.listTasks ]
            }
        case SET_ERROR_FORM_TASK:
            return {
                ...state,
                errorFormTask: payload
            }
        case DELETE_TASK:
            return {
                ...state,
                listTasks: state.listTasks.filter(task => (task.id !== payload) )
            }
        case UPDATE_TASK:
            return {
                ...state,
                listTasks: state.listTasks.map(task => task.id === payload.id ? payload : task )
            }
        case SET_TASK:
            return {
                ...state,
                task: {...payload}
            }
        case SET_EDIT_TASK:
            return {
                ...state,
                editTask: payload
            }
        default:
            return state;
    }
}

export default TaskReducer