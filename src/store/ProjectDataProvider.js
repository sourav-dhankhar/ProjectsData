import ProjectDataContext from "./project-data-context";
import { useReducer } from "react";

const defaultProjectData = {
    sidebarStatus: {},
    query: '',
    projectData: {},
    loadingState: false
}

const projectDataReducer = (state, action) => {
    if (action.type == 'SHOW') {
        return {
            sidebarStatus: action.payload.side,
            projectData: action.payload.projectData,
            query: state.query,
            loadingState: state.loadingState
        }
    } else if (action.type == 'HIDE') {
        return {
            sidebarStatus: action.payload.side,
            projectData: {},
            query: state.query,
            loadingState: state.loadingState
        }
    } else if (action.type == 'SEARCH-QUERY') {
        return {
            sidebarStatus: state.sidebarStatus,
            projectData: state.projectData,
            query: action.payload.queryState,
            loadingState: action.payload.queryState
        }
    } else if (action.type == 'LOADING-STATE') {
        return {
            sidebarStatus: state.sidebarStatus,
            projectData: state.projectData,
            query: state.query,
            loadingState: action.loadingState
        }
    } else {
        return defaultProjectData;
    }
}

const ProjectDataProvider = (props) => {
    const [dataState, dispatchDataAction] = useReducer(projectDataReducer, defaultProjectData);

    const showDataHandler = (showData) => {
        dispatchDataAction({ type: 'SHOW', payload: { side: showData.side, projectData: showData.projectData } });
    }

    const hideDataHandler = (hideData) => {
        dispatchDataAction({ type: 'HIDE', payload: { side: hideData.side, projectData: hideData.projectData } });
    }

    const toggleLoadingState = (loadingState) => {
        dispatchDataAction({ type: 'LOADING-STATE', payload: { loadingState: loadingState } });
    }

    const handleSearchQuery = (query) => {
        dispatchDataAction({ type: 'SEARCH-QUERY', payload: { queryState: query.queryState, loadingState: query.loadingState } });
    }

    const ProjectDataContexts = {
        sidebarStatus: dataState.sidebarStatus,
        projectData: dataState.projectData,
        query: dataState.query,
        loadingState: dataState.loadingState,
        show: showDataHandler,
        hide: hideDataHandler,
        searchQuery: handleSearchQuery,
        toggleLoadingState: toggleLoadingState
    }

    return <ProjectDataContext.Provider value={ProjectDataContexts}>
        {props.children}
    </ProjectDataContext.Provider>
}

export default ProjectDataProvider;