import React, { useContext } from 'react'
import ProjectContext from '../../context/project/ProjectContext'
import TaskContext from '../../context/task/TaskContext'

const Project = ({ project }) => {
    const { selectProject } = useContext(ProjectContext)
    const { getTasks, unselectTask } = useContext(TaskContext)

    const onClick = id => {
        selectProject(id)
        getTasks(id)
        unselectTask()
    }

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => onClick(project.id)}
            >{project.name}</button>
        </li>
    );
}
 
export default Project;