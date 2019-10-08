import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

export default function Confirm () {

    const products = [{
        id: 1,
        name: 'Palomitas',
        price: '0.80'
    }, {
        id: 2,
        name: 'Monster',
        dni: '1',
    }];

    const columns = [{
        dataField: 'id',
        text: 'ID Producto'
        }, {
        dataField: 'name',
        text: 'Nombre'
        }, {
        dataField: 'price',
        text: 'Precio Unitario'
        }, {
            dataField: 'cantidad',
            text: 'Cantidad'
        }, {
            dataField: 'iva',
            text: 'IVA'
        }];

    return(
        <Container>
            <Row>
                <Col md="6">
                    <h3>Cliente</h3>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input disabled/>{' '}
                        <Label>NIE o NIF</Label>
                        <Input disabled/>
                    </FormGroup>
                </Col>
                <Col>
                    <h3>Artículos</h3>
                    <BootstrapTable
                      keyField="id"
                      data={ products }
                      columns={ columns }
                      cellEdit={ cellEditFactory({ mode: 'click' }) }
                    />
                </Col>
            </Row>
        </Container>
    )
}