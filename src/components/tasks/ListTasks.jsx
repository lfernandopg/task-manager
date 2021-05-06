import React, { Fragment, useContext } from 'react'
import Task from './Task'
import TaskContext from '../../context/task/TaskContext'
import ProjectContext from '../../context/project/ProjectContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListTasks = () => {
    
    const { listTasks, deleteTask } = useContext(TaskContext)
    const { selectedProject, unselectProject, deleteProject } = useContext(ProjectContext)

    const onClickDelete = id => {
        deleteProject(id)
        listTasks.forEach(task => {
            deleteTask(task.id)
        });
        unselectProject()
    }

    if (!selectedProject) {
        return <h2>Selecciona un proyecto</h2>
    }

    return (
        <Fragment>
            <h2>Proyecto: {selectedProject.name}</h2>
            <ul className="listado-tareas">
                { listTasks.length === 0 ?
                    (<li className="tarea"><p>No hay tareas</p></li>)
                :
                    <TransitionGroup>
                    {listTasks.map(task => (
                        <CSSTransition
                            key={task.id}
                            timeout={200}
                            className="tarea"
                        >
                            <Task
                                task={task}
                                key={task.id}
                            />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => onClickDelete(selectedProject.id)}
            >Eliminar Proyecto &times;</button>  
        </Fragment>  
    );
}
 
export default ListTasks;