import React, { } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Col } from 'reactstrap';

export default function AddModal(props) {

  function showEditModal() {
    props.showEditModalProps()
  }

  return (

    <Modal isOpen={props.editModal} toggle={showEditModal} size="lg">
      <ModalHeader toggle={showEditModal}>Editar producto: </ModalHeader>
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
          <Label for="exampleText">Descripción</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" /*onClick={handleEditFamiliar}*/ onClick={showEditModal} >Ok</Button>{' '}
        <Button color="neutral" onClick={showEditModal}>Cancel</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}


