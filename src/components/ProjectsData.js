import React from 'react'
import ProjectDetails from './ProjectDetails'
import style from './ProjectsData.module.css';

import ProjectDataContext from '@/store/project-data-context';
import { useState, useContext, useEffect } from "react";
import SideBar from './SideBar';
import Header from './Header';

function ProjectsData(props) {
  const projectDataCtx = useContext(ProjectDataContext);
  const [projectsData, setProjectsData] = useState(props.projectsData);
  const query = projectDataCtx.query;

  useEffect(() => {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(query);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("/api/filterOutData", requestOptions)
        .then(response => response.text())
        .then(result => {
          // console.log('result:: ', result);
          setProjectsData(JSON.parse(result));
        }
        )
        .catch(error => console.log('error', error));
  }, [query])


  return (
    <div>
      <Header />
      {projectDataCtx.isOpen && <SideBar />}
      {projectsData.length && <section className={style.container} style={{ overflow: projectDataCtx.isOpen ? 'hidden' : 'scroll' }}>
        {
          projectsData.map((projectData) =>
            <ProjectDetails key={projectData.id} projectData={projectData} />
          )
        }
      </section>}
      {!projectsData.length && <h2 className='d-flex justify-content-center align-items-center w-100 h-100'>No Data</h2>}
    </div>
  )
}

export default ProjectsData