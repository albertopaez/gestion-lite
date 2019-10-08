import React from 'react';
import { Container, Button  } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Dashboard () {
    return(
        <Container>
            <h1>Gestión Little</h1>
            <Link to="/gestion">
                <Button outline color="primary">Acceder</Button> 
            </Link>
        </Container>
    )
}