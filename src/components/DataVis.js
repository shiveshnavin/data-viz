import { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import './Table.css'

export function DataViz({ model, setModel }) {

    const [products, setProducts] = useState([{
        id: '1',
        name: 'nameasd',
        price: 11
    }])
    const columns = [{
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];


    return (

        <div>
            <button style={{ width: '80vw' }} className="pl-10 pr-10 pt-2 pb-2 rounded-md border-radius-11 bg-green-600 text-white" onClick={() => {
                try {
                    setModel({
                        data: products,
                        config: model.config
                    })
                } catch (e) {
                    console.log(e)
                }
            }} >SAVE</button>
            <BootstrapTable
                onDataSizeChange={(newData) => {
                    console.log(newData)
                }}
                keyField="id"
                data={products}
                columns={columns}
                cellEdit={cellEditFactory({
                    mode: 'click', blurToSave: true
                })}
            />
        </div>

    )
}