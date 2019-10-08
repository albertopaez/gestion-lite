import React, { useState } from 'react';
import { Container, Card, CardBody, Col } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

export default function Display() {

    const [price] = useState();
    const [iva] = useState();
    const [discount] = useState();
    const [total] = useState();

    const columns = [{
        dataField: 'description',
        text: 'Descripción'
    }, {
        dataField: 'cantidad',
        text: 'Cantidad'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }, {
        dataField: 'iva',
        text: 'IVA'
    }];

    const products = [{
        id: 1,
        name: 'Palomitas',
        price: '0.80'
    }, {
        id: 2,
        name: 'Monster',
        dni: '1',
    }];

    const columns2 = [{
        dataField: 'totalIva',
        text: 'IVA'
    }];

    const products2 = [{
        id: 1,
        name: 'Palomitas',
        price: '0.80'
    }];

    return (
        <Container>
            <Card>
                <CardBody>
                    <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <h3>Gestión Little</h3>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <p align="right">c/ Bilbo SN
                            <br />Tlf: 666555444
                            <br />Email: gestionlittle@gmail.com</p>
                    </Col>
                    <Col>
                        <h4>{'Nombre cliente'}</h4>
                        <p>{'Dirección'}
                            <br />{'tlf'}
                            <br />{'email'}</p>
                    </Col>
                    <Col>
                        <BootstrapTable
                            keyField="id"
                            data={products}
                            columns={columns}
                        />
                        < Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <table align="rigth">
                                <tr>
                                    <th>IVA</th>
                                    <td>{'iva total'}</td>
                                </tr>
                                <tr>
                                    <th>Descuento</th>{' '}
                                    <td>{'porcentaje'}</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>{'Precio total'}</td>
                                </tr>
                            </table>
                        </Col>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <h4>Total a pagar {price}</h4>
                    </Col>
                </CardBody>
            </Card>
        </Container>
    )
}