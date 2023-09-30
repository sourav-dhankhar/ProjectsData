import React from "react";

const ProjectDataContext = React.createContext({
    sidebarStatus: {},
    projectData: {},
    query: '',
    loadingState: false,
    show: (item) => {},
    hide: (item) => {},
    searchQuery: (item) => {},
    toggleLoadingState: (item) => {}
})

export default ProjectDataContext;