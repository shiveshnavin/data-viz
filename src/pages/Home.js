import logo from '../logo.svg';
import '../App.css';
import Dataloader from '../components/Dataloader';
import { useState } from 'react';
import { DataViz } from '../components/DataVis';

function Home() {

    const [model, setModel] = useState({
        data: {},
        config: {}
    })

    return (
        <div className='p-10'>
            <header>
                <h2 className='text-3xl font-bold underline'>Data Viz</h2>
            </header>
            <div class="inline-block align-middle ...">
                <Dataloader model={model} setModel={setModel} />
                <br />
                <DataViz model={model} setModel={setModel} />
            </div>

        </div>
    );
}

export default Home;
