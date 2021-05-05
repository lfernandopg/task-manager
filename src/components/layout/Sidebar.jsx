import React from 'react'
import FormProject from '../projects/FormProject'
import ListProjects from '../projects/ListProjects'

const Sidebar = () => {
    return (  
        <aside>
            <h1>Tasks<span>Manager</span></h1>
            
            <FormProject/>

            <div className="proyectos">
                <ListProjects/>
            </div>

        </aside>
    );
}
 
export default Sidebar;