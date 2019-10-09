import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import { baseURL } from '../../constants';


export default function AddModal(props) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [tax, setTax] = useState();
  const [description, setDescription] = useState('');

  const values = {
    nombre: name,
    precio: price,
    iva: tax,
    descripcion: description
  };
  
  function submit() {
    axios.post(`${baseURL}/articulos`, values)
      .then(response => {
        console.log(response.data);
        setName('');
        setPrice();
        setTax();
        setDescription('');
        props.getProducts()
        props.showAddModalProps()
      })
      .catch(error => {
        console.log(error);
      });
  }

  function showAddModal() {
    props.getProducts()
    props.showAddModalProps()
  }

  return (
    <Modal isOpen={props.addModal} toggle={showAddModal} size="lg">
      <ModalHeader toggle={showAddModal}>Añadir productos: </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Col md="8">
            <Label >Nombre: </Label>
            <Input onChange={e => setName(e.target.value)} />
          </Col>
          <Col md="6">
            <Label>Precio unidad: </Label>
            <Input onChange={e => setPrice(e.target.value)} />
          </Col>
          {/* <Col md="3">
            <Label>Cantidad </Label>
            <Input type="select" name="select" id="exampleSelect">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
              </Input>
          </Col> */}
          <Col md="3"><Label>IVA</Label><Input
            onChange={e => setTax(e.target.value)} /></Col>
          <Label for="exampleText">Descripción</Label>
          <Input type="textarea" name="text" id="exampleText"
            onChange={e => setDescription(e.target.value)} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submit} >Añadir</Button>{' '}
        <Button color="neutral" onClick={showAddModal}>Cancel</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}