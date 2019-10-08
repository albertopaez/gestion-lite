import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Step from '../../components/stepper'

export default function AddModal(props) {

  function showAddModal() {
    props.showAddModalProps()
  }

  return (
    <Modal isOpen={props.addModal} toggle={showAddModal} size="lg">
      <ModalHeader toggle={showAddModal}>Añadir factura: </ModalHeader>
      <ModalBody>
        <Step />
      </ModalBody>
    </Modal>
  )

}