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
        setPhone();
        setMail('');
        props.getClientsProps()
        props.showAddModalProps()
      })
      .catch(error => {
        console.log(error);
      });
  }

  function showAddModal() {
    props.getClientsProps()
    props.showAddModalProps()
  }

  function showAddModal() {
    props.showAddModalProps()
    props.getClientsProps()
  }

  return (
    <Modal isOpen={props.addModal} toggle={showAddModal} size="lg">
      <ModalHeader toggle={showAddModal}>Añadir cliente: </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Col>
            <Label >Nombre: <Input onChange={e => setName(e.target.value)} id="name" type="text"/></Label>{' '}
            <Label>Apellidos: <Input onChange={e => setSurname(e.target.value)} type="text" id="surname"/></Label>{' '}
            <Label>NIF o NIE: <Input onChange={e => setNie(e.target.value)} type="text" id="nif"/></Label>{' '}
          </Col>
          <Col>
            <Label>Localidad: <Input onChange={e => setLocation(e.target.value)}type="text" id="nif"/></Label>{' '}
            <Label>Dirección: <Input onChange={e => setAddress(e.target.value)}type="text" id="nif"/></Label>{' '}
            <Label>Teléfono: <Input onChange={e => setPhone(e.target.value)}type="text" id="nif"/></Label>{' '}
          </Col>
          <Col>
            {/* <Label>Fax: <Input type="text" id="nif"/></Label>{' '} */}
            <Label>Email: <Input onChange={e => setMail(e.target.value)} type="text" id="nif"/></Label>{' '}
          </Col>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submit} >Añadir</Button>{' '}
        <Button color="neutral" onClick={showAddModal}>Cancelar</Button>{' '}
      </ModalFooter>
    </Modal>
  )

}