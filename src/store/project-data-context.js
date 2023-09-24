import React from "react";

const ProjectDataContext = React.createContext({
    isOpen: false,
    projectData: {},
    query: '',
    show: (item) => {},
    hide: () => {}
})

export default ProjectDataContext;