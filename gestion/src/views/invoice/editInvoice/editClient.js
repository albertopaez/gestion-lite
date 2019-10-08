import React, { useState } from 'react';
import { Container, Row, Col, Label, Input, FormGroup } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


export default function Editclient() {

    return (
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <FormGroup>
                    <Col>
                        <Label >Nombre: <Input id="name" type="text" /></Label>{' '}
                        <Label>Apellidos: <Input type="text" id="surname" /></Label>{' '}
                        <Label>NIF o NIE: <Input type="text" id="nif" /></Label>{' '}
                    </Col>
                    <Col>
                        <Label>Localidad: <Input type="text" id="nif" /></Label>{' '}
                        <Label>Dirección: <Input type="text" id="nif" /></Label>{' '}
                        <Label>Teléfono: <Input type="text" id="nif" /></Label>{' '}
                    </Col>
                    <Col>
                        <Label>Fax: <Input type="text" id="nif" /></Label>{' '}
                        <Label>Email: <Input type="text" id="nif" /></Label>{' '}
                    </Col>
                </FormGroup>
            </Row>
    )
}