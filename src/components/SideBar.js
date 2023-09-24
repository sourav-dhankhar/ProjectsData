import React from 'react'
import style from './Sidebar.module.css'
import ProjectDataContext from '@/store/project-data-context';
import { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

function SideBar() {
    const projectDataCtx = useContext(ProjectDataContext);
    const closeSidebarHandler = () => {
        projectDataCtx.hide();
    }
    return (
        <React.Fragment>
            <div className={style['sidebar-lower']}></div>
            <div className={style.sidebar} style={{ opacity: projectDataCtx.isOpen ? '1' : '0', transition: 'all 2s' }}>
                <span>
                    <XCircleIcon style={{ height: '35px', position: 'absolute', right: '10px', 'top': '10px', cursor: 'pointer' }} onClick={closeSidebarHandler} />
                </span>
                <div>
                    <h4 className={style.title}>{projectDataCtx.projectData.project.Title}</h4>
                    <div className='mb-4'>
                        <h6 className='mb-2'>Title</h6>
                        <p>{projectDataCtx.projectData.project.Title}</p>
                    </div>
                    <div className='mb-4'>
                        <h6 className='mb-2'>Project.Technologies</h6>
                        <p>{projectDataCtx.projectData.project.Technologies}</p>
                    </div>
                    <div className='mb-4'>
                        <h6 className='mb-2'>Technical_Skillset.Frontend</h6>
                        <p>{projectDataCtx.projectData.technicalSkillSet.Frontend}</p>
                    </div>
                    <div className='mb-4'>
                        <h6 className='mb-2'>Technical_Skillset.Backend</h6>
                        <p>{projectDataCtx.projectData.technicalSkillSet.Backend}</p>
                    </div>
                    <div className='mb-4'>
                        <h6 className='mb-2'>Technical_Skillset.Databases</h6>
                        <p>{projectDataCtx.projectData.technicalSkillSet?.Databases ? projectDataCtx.projectData.technicalSkillSet?.Databases : '-'}</p>
                    </div>
                    <div className='mb-4'>
                        <h6 className='mb-2'>Technical_Skillset.Infrastructure</h6>
                        <p>{projectDataCtx.projectData.technicalSkillSet?.Infrastructure ? projectDataCtx.projectData.technicalSkillSet?.Infrastructure : '-'}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideBar