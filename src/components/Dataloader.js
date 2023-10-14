import { useEffect, useState } from "react";

function Dataloader({ model, setModel }) {

    const [data, setData] = useState(JSON.stringify(model.data));
    const [config, setConfig] = useState([]);

    useEffect(() => {
        setData(JSON.stringify(model.data))
        setConfig(JSON.stringify(model.config))
    }, [model])

    return (
        <div className="justify-items-center" >
            <h3>Load JSON Dataloader</h3>
            <textarea
                style={{ color: 'black', width: '80vw' }}
                className="m-10 border border-grey-500"
                rows={5}
                type="text"
                value={data}
                onChange={(e) => {
                    setData(e.target.value)
                }}
            />

            <textarea
                style={{ color: 'black', width: '80vw' }}
                className="m-10 border border-grey-500"
                rows={5}
                type="text"
                value={config}
                onChange={(e) => {
                    setConfig(e.target.value)
                }}
            />
            <button style={{}} className="pl-10 pr-10 pt-2 pb-2 rounded-md border-radius-11 bg-green-600 text-white" onClick={() => {
                try {

                    let confObj = JSON.parse(config)
                    let dao = JSON.parse(data)
                    if (config.length == 0) {
                        [{
                            dataField: 'id',
                            text: 'Product ID'
                        }, {
                            dataField: 'name',
                            text: 'Product Name'
                        }, {
                            dataField: 'price',
                            text: 'Product Price'
                        }]

                        config = Object.keys(data).map(dk => {
                            return {
                                dataField: dk,
                                text: dk
                            }
                        })
                    }

                    setModel({
                        data: JSON.parse(data),
                        config: JSON.parse(config)
                    })
                } catch (e) {
                }
            }} >Update</button>


        </div >
    );
}

export default Dataloader;
