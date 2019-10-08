import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

export default function AddClient (){

    const [selected, setSelected] = useState(false);
    const [actRowIndex, setActRowIndex] = useState(false)

    function handleSelected(){
        setSelected(!selected)
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
        dni: '27898755g'
    }, {
        id: 2,
        name: 'Juan Manuel',
        dni: '47324658k',
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
        <Container style={{marginLeft: '20px'}}>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
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
                            <Col style={{display: 'flex', marginTop: '1rem', justifyContent: 'center'}}>
                                <BootstrapTable
                                    { ...props.baseProps }
                                    selectRow={ selectRow }
                                    rowEvents={ rowEvents }
                                />
                            </Col>
                        </div>
                        )
                    }
                </ToolkitProvider>
            </Row>
        </Container>
    )
}