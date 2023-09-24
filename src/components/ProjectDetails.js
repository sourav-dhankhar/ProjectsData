import React from 'react'
import { Card } from 'react-bootstrap'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import ProjectDataContext from '@/store/project-data-context';
import { useContext } from 'react';
import styles from "./ProjectDetails.module.css";


function ProjectDetails(props) {
    let project = props.projectData.project;
    let technicalSkillSet = props.projectData.technicalSkillSet;

    const projectDataCtx = useContext(ProjectDataContext);

    const viewModeHandler = () => {
        console.log('view handler is called');
        projectDataCtx.show(props.projectData);
    }

    return (
        <Card className={styles['Project-card']} style={{ width: '-webkit-fill-available' }} onClick={viewModeHandler}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Title</Card.Subtitle>
                <Card.Title>{project.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Project.Technologies</Card.Subtitle>
                <Card.Text>{project.Technologies}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Technical_Skillset.Frontend</Card.Subtitle>
                <Card.Text>{technicalSkillSet.Frontend}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Technical_Skillset.Backend</Card.Subtitle>
                <Card.Text>{technicalSkillSet.Backend}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Technical_Skillset.Databases</Card.Subtitle>
                <Card.Text>{technicalSkillSet?.Databases ? technicalSkillSet.Databases : '-'}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Technical_Skillset.Infrastructure</Card.Subtitle>
                <Card.Text>{technicalSkillSet?.Infrastructure ? technicalSkillSet.Infrastructure : '-'}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectDetails