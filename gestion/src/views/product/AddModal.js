import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Col } from 'reactstrap';

export default function AddModal(props) {

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
            <Input />
          </Col>
          <Col md="6">
            <Label>Precio unidad: </Label>
            <Input />
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
          <Col md="3"><Label>IVA</Label><Input /></Col>
          <Label for="exampleText">Descripción</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={showAddModal} >Añadir</Button>{' '}
        <Button color="neutral" onClick={showAddModal}>Cancel</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}