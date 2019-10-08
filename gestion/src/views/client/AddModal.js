import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Col } from 'reactstrap';

export default function AddModal(props) {

  function showAddModal() {
    props.showAddModalProps()
  }

  return (
    <Modal isOpen={props.addModal} toggle={showAddModal} size="lg">
      <ModalHeader toggle={showAddModal}>Añadir cliente: </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Col>
            <Label >Nombre: <Input id="name" type="text"/></Label>{' '}
            <Label>Apellidos: <Input type="text" id="surname"/></Label>{' '}
            <Label>NIF o NIE: <Input type="text" id="nif"/></Label>{' '}
          </Col>
          <Col>
            <Label>Localidad: <Input type="text" id="nif"/></Label>{' '}
            <Label>Dirección: <Input type="text" id="nif"/></Label>{' '}
            <Label>Teléfono: <Input type="text" id="nif"/></Label>{' '}
          </Col>
          <Col>
            <Label>Fax: <Input type="text" id="nif"/></Label>{' '}
            <Label>Email: <Input type="text" id="nif"/></Label>{' '}
          </Col>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={showAddModal} >Añadir</Button>{' '}
        <Button color="neutral" onClick={showAddModal}>Cancelar</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}