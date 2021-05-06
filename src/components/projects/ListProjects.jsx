import React, { useContext, useEffect, Fragment } from 'react'
import Project from './Project'
import ProjectContext from '../../context/project/ProjectContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProjects = () => {

    const { listProjects, fetchProjects } = useContext(ProjectContext)

    useEffect(() => {
        fetchProjects()
        // eslint-disable-next-line
    }, [])


    if (listProjects.length === 0 ) {
        return <h2>No hay proyectos</h2>
    }

    return (
        <Fragment>
            <h2>Tus proyectos</h2>
            <ul className="Listado-proyectos">

            <TransitionGroup>
            {listProjects.map( project => (
                <CSSTransition
                    key={project.id}
                    timeout={200}
                    className="proyecto"
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