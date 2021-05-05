import React from 'react'
import Sidebar from './layout/Sidebar'
import Bar from './layout/Bar'
import FormTask from './tasks/FormTask'
import ListTasks from './tasks/ListTasks'
import ProjectState from '../context/project/ProjectState'
import TaskState from '../context/task/TaskState'

const Dashboard = () => {
    return (
        <ProjectState>
            <TaskState>
                <div className="contenedor-app">
                    <Sidebar/>

                    <div className="seccion-principal">
                        <Bar/>

                        <main>
                            
                                <FormTask/>
                                <div className="contenedor-tareas">
                                    <ListTasks/>
                                </div>
                        </main>
                    </div>
                </div>
            </TaskState>
        </ProjectState>
    );
}
 
export default Dashboard;