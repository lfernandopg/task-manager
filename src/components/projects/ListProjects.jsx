import React, { useContext, useEffect, Fragment } from 'react'
import Project from './Project'
import ProjectContext from '../../context/project/ProjectContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProjects = () => {

    const { projects, getProjects } = useContext(ProjectContext)

    useEffect(() => {
        getProjects()
    }, [])


    if (projects.length === 0 ) {
        return <h2>No hay proyectos</h2>
    }

    return (
        <Fragment>
            <h2>Tus proyectos</h2>
            <ul className="Listado-proyectos">

            <TransitionGroup>
            {projects.map( project => (
                <CSSTransition
                    key={project.id}
                    timeout={200}
                    classNames="proyecto"
                >
                    <Project
                        project={project}
                        key={project.id}
                    />
                </CSSTransition> 
            ))}
            </TransitionGroup>

            </ul>
        </Fragment>
    );
}
 
export default ListProjects;