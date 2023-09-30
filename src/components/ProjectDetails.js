import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import ProjectDataContext from '@/store/project-data-context';
import { useContext } from 'react';

function ProjectDetails(props) {
    let project = props.projectData.Project;
    let technicalSkillSet = props.projectData.Technical_Skillset;

    const projectDataCtx = useContext(ProjectDataContext);

    const viewModeHandler = () => {
        console.log('view handler is called');
        projectDataCtx.show({ side: { 'right': true }, projectData: props.projectData });
    }

    return (
        <div style={{display: 'flex',width: "-webkit-fill-available"}} onClick={viewModeHandler}>
            <Card sx={{width: "-webkit-fill-available"}}>
                <CardActionArea sx={{height: "100%"}}>
                    <CardContent>
                        <Stack spacing={1}>
                            <Stack>
                                <Typography variant="body2" sx={{ fontSize: 'small' }} color="text.secondary" component="div">
                                    Title
                                </Typography>
                                <Typography variant="body2">
                                    {project.Title}
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="body2" sx={{ fontSize: 'small' }} color="text.secondary" component="div">
                                    Project.Technologies
                                </Typography>
                                <Typography variant="body2">
                                    {project.Technologies}
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="body2" sx={{ fontSize: 'small' }} color="text.secondary" component="div">
                                    Technical_Skillset.Frontend
                                </Typography>
                                <Typography variant="body2">
                                    {technicalSkillSet.Frontend}
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="body2" sx={{ fontSize: 'small' }} color="text.secondary" component="div">
                                    Technical_Skillset.Backend
                                </Typography>
                                <Typography variant="body2">
                                    {technicalSkillSet.Backend}
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="body2" sx={{ fontSize: 'small' }} color="text.secondary" component="div">
                                    Technical_Skillset.Databases
                                </Typography>
                                <Typography variant="body2">
                                    {technicalSkillSet?.Databases ? technicalSkillSet.Databases : '-'}
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="body2" sx={{ fontSize: 'small' }} color="text.secondary" component="div">
                                    Technical_Skillset.Infrastructure
                                </Typography>
                                <Typography variant="body2">
                                    {technicalSkillSet?.Infrastructure ? technicalSkillSet.Infrastructure : '-'}
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>


    )
}

export default ProjectDetails