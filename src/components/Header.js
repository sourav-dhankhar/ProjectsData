import { useState, useContext } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ProjectDataContext from '@/store/project-data-context';

function Header(props) {
    const [queryState, setQueryState] = useState('');
    const projectDataCtx = useContext(ProjectDataContext);
    const loadingState = projectDataCtx.loadingState;
    const handleInputChange = (event) => {
        setQueryState(event.target.value);
    }
    function searchQueryHandler() {
        projectDataCtx.searchQuery({queryState: queryState, loadingState: true});
    }
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', margin: "10px auto", display: 'flex', alignItems: 'center', width: '50%' , position: 'relative'}} onSubmit={e => { e.preventDefault(); searchQueryHandler()}}
        >
            <InputBase
                sx={{ ml: 1, flex: 1, cursor: "text" }}
                placeholder="Search project through Technologies/TechnicalSets"
                inputProps={{ 'aria-label': 'Search project through Technologies/TechnicalSets' }}
                value={queryState}
                onChange={handleInputChange}
            />
            {!loadingState && <IconButton type="button" sx={{ p: '10px' }}  aria-label="search" onClick={searchQueryHandler}>
                <SearchIcon />
            </IconButton>}
            {loadingState && <IconButton type="button" sx={{ p: '10px' }} disabled aria-label="search" onClick={searchQueryHandler}>
                <SearchIcon />
            </IconButton>}
            
        </Paper>
    )
}

export default Header