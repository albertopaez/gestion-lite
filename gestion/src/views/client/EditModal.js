import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import { baseURL } from '../../constants';

export default function AddModal(props) {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState();
  const [nie, setNie] = useState();
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  let weird = props.clientRow;

  const values = {
    nombre: name,
    apellidos: surname,
    cif: nie,
    localidad: location,
    direccion: address,
    telefono: phone,
    email: mail
  };
  
  function submit() {
    axios.post(`${baseURL}/clientes`, values)
      .then(response => {
        console.log(response.data);
        setName('');
        setSurname('');
        setNie('');
        setLocation('');
        setAddress('');
        setPhone();
        setMail('');
        props.getClientsProps()
        props.showEditModalProps()
      })
      .catch(error => {
        console.log(error);
      });
  }

  function showEditModal() {
    props.showEditModalProps()
    props.getClientsProps()
    console.log(props.clientRow)
    console.log(weird)
  }

  return (

    <Modal isOpen={props.editModal} toggle={showEditModal} size="lg">
      <ModalHeader toggle={showEditModal}>Editar familiar: </ModalHeader>
      <ModalBody>
      <FormGroup>
          <Col>
            <Label >Nombre: <Input defaultValue={name} id="name" type="text" /></Label>{' '}
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
        <Button color="primary" onClick={submit} >Ok</Button>{' '}
        <Button color="neutral" onClick={showEditModal}>Cancelar</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}


