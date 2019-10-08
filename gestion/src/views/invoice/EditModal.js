import React, { } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Step2 from '../../components/stepper2'

export default function AddModal(props) {

  function showEditModal() {
    props.showEditModalProps()
  }

  return (

    <Modal isOpen={props.editModal} toggle={showEditModal} size="lg">
      <ModalHeader toggle={showEditModal}>Editar factura: </ModalHeader>
      <ModalBody>
      <Step2 />
      </ModalBody>
    </Modal>
  )

}


