import React, { useContext } from 'react'
import ProjectContext from '../../context/project/ProjectContext'
import TaskContext from '../../context/task/TaskContext'

const Project = ({ project }) => {
    const { selectProject, setEditProject, setActiveFormProject, getProject } = useContext(ProjectContext)
    const { fetchTasks, setEditTask } = useContext(TaskContext)

    const onClickSelect = id => {
        selectProject(id)
        fetchTasks(id)
        setEditTask(false)
        setEditProject(false)
        setActiveFormProject(false)
    }

    const onClickEdit = id => {
        getProject(id)
        setEditProject(true)
    }

    return (  
        <li>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <button
                    type="button"
                    className="btn btn-blank"
                    onClick={() => onClickSelect(project.id)}
                >{project.name}</button>
                <i 
                    className="fas fa-edit"
                    style={{
                        marginLeft: "10px",
                    }}
                    onClick={() => onClickEdit(project.id)}

                />
            </div>
        </li>
    );
}
 
export default Project;