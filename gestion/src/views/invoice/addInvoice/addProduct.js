import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

export default function AddProduct (){

    const [selected, setSelected] = useState(false);
    const [actRowIndex, setActRowIndex] = useState(false)

    function handleSelected(){
        setSelected(!selected)
    }

    const { SearchBar } = Search;

    const columns = [{
    dataField: 'id',
    text: 'ID Producto'
    }, {
    dataField: 'name',
    text: 'Nombre'
    }, {
    dataField: 'price',
    text: 'Precio Unitario'
    }, {
        dataField: 'cantidad',
        text: 'Cantidad'
    }, {
        dataField: 'iva',
        text: 'IVA'
    }];

    const products = [{
        id: 1,
        name: 'Palomitas',
        price: '0.80'
    }, {
        id: 2,
        name: 'Monster',
        dni: '1',
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
        </Container>
    )
}