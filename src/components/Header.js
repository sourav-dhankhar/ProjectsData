import React from 'react'
import {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import ProjectDataContext from '@/store/project-data-context';

function Header() {
    const [queryState, setQueryState] = useState('');
    const projectDataCtx = useContext(ProjectDataContext);
    const handleInputChange = (event) => {
        setQueryState(event.target.value);
    }
    function searchQueryHandler() {
        projectDataCtx.searchQuery(queryState);
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid className='justify-content-center'>
                <Form className="d-flex w-50">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 cursor-text"
                        aria-label="Search"
                        value={queryState}
                        onChange = {handleInputChange}
                    />
                    <Button variant="outline-success" onClick={searchQueryHandler}>Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Header