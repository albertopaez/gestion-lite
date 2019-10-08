import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import AddModal from './AddModal';
import EditModal from './EditModal';
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Client (){

    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selected, setSelected] = useState(false);
    const [actRowIndex, setActRowIndex] = useState(false)
    const [inscribed, setInscribed] = useState([])

    function showAddModal(){
        setAddModal(!addModal)
    }

    function showEditModal(){
        if(selected){
            setEditModal(!editModal)
        } else {
            alert("Seleccione una fila")
        }
    }

    function handleSelected(){
        setSelected(!selected)
    }

    const handleDelete = (id) => {
        Swal.fire({
          title: '¿Está seguro que desea eliminar el cliente?',
          text: "Esta acción será irreversible.",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
        }).then((result) => {
          if (result.value) {
            axios({
              method: 'delete',
              url: `http://localhost:8000/posts/${id}`,
              data: null,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST, DELETE'
              },
            }).then(response => {
              console.log(response.data);
              Swal.fire(
                '¡Eliminado!',
                'El cliente ha sido eliminado con éxito.',
                'success'
              )
              //fetchUsers()
            })
              .catch(error => {  
                console.log(error);   
              });  
          }    
        })
      }

    const { SearchBar } = Search;

    const columns = [{
        dataField: 'id',
        text: 'ID Cliente'
    }, {
        dataField: 'name',
        text: 'Nombre cliente'
    }, {
        dataField: 'nif',
        text: 'NIF/NIE'
    },{
        dataField: 'address',
        text: 'Dirección'
    }, {
        dataField: 'location',
        text: 'Localidad'
    }, {
        dataField: 'tlf',
        text: 'Tlf'
    }, {
        dataField: 'fax',
        text: 'Fax'
    }];

    const products = [{
        id: 1,
        name: 'Juan García',
        nif: '27898755g'
    }, {
        id: 2,
        name: 'Juan Manuel',
        nif: '47324658k',
    }];

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        style: { backgroundColor: '#c8e6c9' },
        onSelect: handleSelected
      };
    
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(`clicked on row with index: ${rowIndex}`);
            var rowI = rowIndex
            setActRowIndex(rowI)
            console.log("and rowIndex is: " + actRowIndex + "but RowI is: " + rowI);
        }
    }

    return(
        <Container>
            <Row>
                <Col xs={12}>
                    <AddModal showAddModalProps={showAddModal} addModal={addModal} /> {/*MODAL ADD FAMILIAR TO FAMILY UNIT*/}
                    <EditModal showEditModalProps={showEditModal} editModal={editModal} /> {/**MODAL EDIT SELECTED FAMILIAR */}
                    <Row >
                        <Col>
                            <Button onClick={showAddModal} style={{ marginLeft: "20px", marginTop: '1rem' }} >Añadir</Button>
                        </Col>
                        <Col >
                            <Button onClick={showEditModal} style={{ marginLeft: "10px", marginTop: '1rem' }} >Editar</Button>
                        </Col>
                        <Col >
                            <Button onClick={ () => handleDelete()} style={{ marginLeft: "5px", marginTop: '1rem' }} >Eliminar</Button>
                        </Col>
                    </Row>
                </Col>
            <Row>
                <ToolkitProvider
                    keyField="id"
                    data={ products }
                    columns={ columns }
                    search
                    >
                    {
                        props => (
                        <div>
                            <Col style={{display: 'flex', flexDirection: 'row', marginTop: '1rem', justifyContent: 'center'}}>
                                <h3>Buscar {' '}
                                    <SearchBar { ...props.searchProps } />
                                </h3>
                            </Col>
                            <hr />
                            <BootstrapTable
                                { ...props.baseProps }
                                selectRow={ selectRow }
                                rowEvents={ rowEvents }
                            />
                        </div>
                        )
                    }
                </ToolkitProvider>
                </Row>
            </Row>
        </Container>
    )
}