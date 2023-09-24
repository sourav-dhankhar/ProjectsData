import ProjectDataContext from "./project-data-context";
import {useReducer} from 'react';

const defaultProjectData = {
    isOpen: false,
    query: '',
    projectData: {}
}

const projectDataReducer = (state, action) => {
    if (action.type == 'SHOW') {
        return {
            isOpen: true,
            projectData: action.payload
        }
    } else if (action.type == 'HIDE') {
        return {
            isOpen: false,
            projectData: {}
        }
    } else if (action.type == 'SEARCH-QUERY') {
        return {
            query: action.payload
        }
    } else {
        return defaultProjectData;
    }
}

const ProjectDataProvider = (props) => {
    const [dataState, dispatchDataAction] = useReducer(projectDataReducer, defaultProjectData);

    const showDataHandler = (projectData) => {
        dispatchDataAction({ type: 'SHOW', payload: projectData });
    }

    const hideDataHandler = () => {
        dispatchDataAction({ type: 'HIDE' });
    }

    const handleSearchQuery = (query) => {
        dispatchDataAction({ type: 'SEARCH-QUERY', payload: query });
    }

    const ProjectDataContexts = {
        isOpen: dataState.isOpen,
        projectData: dataState.projectData,
        query: dataState.query,
        show: showDataHandler,
        hide: hideDataHandler,
        searchQuery: handleSearchQuery
    }

    return <ProjectDataContext.Provider value={ProjectDataContexts}>
        {props.children}
    </ProjectDataContext.Provider>
}

export default ProjectDataProvider;