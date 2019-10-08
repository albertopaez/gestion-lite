import React, { } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Col } from 'reactstrap';

export default function AddModal(props) {

  function showEditModal() {
    props.showEditModalProps()
  }

  return (

    <Modal isOpen={props.editModal} toggle={showEditModal} size="lg">
      <ModalHeader toggle={showEditModal}>Editar familiar: </ModalHeader>
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
        <Button color="primary" onClick={showEditModal} >Ok</Button>{' '}
        <Button color="neutral" onClick={showEditModal}>Cancelar</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}


