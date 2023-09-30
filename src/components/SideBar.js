import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import ProjectDataContext from '@/store/project-data-context';
import { useContext } from 'react';

function SideBar() {
    const projectDataCtx = useContext(ProjectDataContext);
    const closeSidebarHandler = () => {
        projectDataCtx.hide({ side: { 'right': false }, projectData: {} });
    }
    const openSidebarHandler = () => {

    }
    const sidebarStatus = projectDataCtx.sidebarStatus;

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
            role="presentation"
            onClick={closeSidebarHandler}
            onKeyDown={closeSidebarHandler}
        >
            <Typography sx={{ m: 2 }} variant="h6" component="div">
                {projectDataCtx.projectData?.Project?.Title}
            </Typography>
            <Divider color="#848484" variant="middle" />
            <List dense={false}>
                <ListItem>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography variant="caption">Title</Typography>}
                        secondary={<Typography variant="h6" sx={{ fontSize: 'small' }}>{projectDataCtx.projectData?.Project?.Title}</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography variant="caption">Project.Technologies</Typography>}
                        secondary={<Typography variant="h6" sx={{ fontSize: 'small' }}>{projectDataCtx.projectData?.Project?.Technologies}</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography variant="caption">Technical_Skillset.Frontend</Typography>}
                        secondary={<Typography variant="h6" sx={{ fontSize: 'small' }}>{projectDataCtx.projectData?.Technical_Skillset?.Frontend}</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography variant="caption">Technical_Skillset.Backend</Typography>}
                        secondary={<Typography variant="h6" sx={{ fontSize: 'small' }}>{projectDataCtx.projectData?.Technical_Skillset?.Backend}</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography variant="caption">Technical_Skillset.Databases</Typography>}
                        secondary={<Typography variant="h6" sx={{ fontSize: 'small' }}>{projectDataCtx.projectData?.Technical_Skillset?.Databases ? projectDataCtx.projectData.Technical_Skillset?.Databases : '-'}</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography variant="caption">Technical_Skillset.Infrastructure</Typography>}
                        secondary={<Typography variant="h6" sx={{ fontSize: 'small' }}>{projectDataCtx.projectData?.Technical_Skillset?.Infrastructure ? projectDataCtx.projectData.Technical_Skillset?.Infrastructure : '-'}</Typography>}
                    />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            {['left', 'right', 'top', 'bottom'].map((anchor) => (

                sidebarStatus != {} && sidebarStatus[anchor] != undefined && <SwipeableDrawer
                    anchor={anchor}
                    open={sidebarStatus[anchor]}
                    onClose={closeSidebarHandler}
                    onOpen={openSidebarHandler}
                >
                    {list(anchor)}
                </SwipeableDrawer>

            ))}

        </React.Fragment>
    )
}

export default SideBar