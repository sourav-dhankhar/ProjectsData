import React from 'react'
import ProjectDetails from './ProjectDetails'
import style from './ProjectsData.module.css';

import ProjectDataContext from '@/store/project-data-context';
import { useState, useContext, useEffect } from "react";
import SideBar from './SideBar';
import Header from './Header';

function ProjectsData(props) {
  const projectDataCtx = useContext(ProjectDataContext);
  const projectsData = props.projectsData;
  const query = projectDataCtx.query;

  // const filterData = projectsData.filter((projectData) => {
  //   // const keywords = query?.toLowerCase()?.split(' ');
  //   // return keywords.every((keyword) => {
  //   //   const { Title, Technologies } = projectData.project;
  //   //   return (
  //   //     Title.toLowerCase().includes(keyword) ||
  //   //     Technologies.toLowerCase().includes(keyword)
  //   //   );
  //   // });
  // })

  return (
    <div>
      <Header />
      {projectDataCtx.isOpen && <SideBar />}
      <section className={style.container} style={{overflow: projectDataCtx.isOpen? 'hidden': 'scroll'}}>
        {
          projectsData.map((projectData) =>
            <ProjectDetails key={projectData.id} projectData={projectData} />
          )
        }
      </section>
    </div>
  )
}

export default ProjectsData