import React from 'react'
import ProjectDetails from './ProjectDetails'
import CircularProgress from '@mui/material/CircularProgress';
import Overlay from './Overlay';
import Typography from '@mui/material/Typography';
import style from './ProjectsData.module.css';

import ProjectDataContext from '@/store/project-data-context';
import { useState, useContext, useEffect } from "react";
import SideBar from './SideBar';
import Header from './Header';

function ProjectsData(props) {
  const projectDataCtx = useContext(ProjectDataContext);
  const [projectsData, setProjectsData] = useState(props.projectsData);
  const loadingState = projectDataCtx.loadingState;
  const query = projectDataCtx.query;
  const projectsDataLength = projectsData.length ? true : false;

  useEffect(() => {
    if (loadingState == false) {
      projectDataCtx.toggleLoadingState(true);
    }
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
        projectDataCtx.toggleLoadingState(false);
      }
      )
      .catch(error => {
        console.log('error', error);
        projectDataCtx.toggleLoadingState(false);
      });
  }, [query])


  return (
    <div style={{ height: '100vh' }}>
      <Header />
      {projectDataCtx.projectData != {} && <SideBar />}
      {loadingState && <Overlay><CircularProgress /></Overlay>}
      {(projectsDataLength && !loadingState) && <section className={style.container}>
        {
          projectsData.map((projectData) =>
            <ProjectDetails key={projectData.id} projectData={projectData} />
          )
        }
      </section>}
      {!projectsDataLength && <Overlay><Typography variant='h5'>No Data Found</Typography></Overlay>}
    </div>
  )
}

export default ProjectsData