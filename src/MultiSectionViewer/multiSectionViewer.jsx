import { useState, useEffect } from 'react';
import './multiSectionViewer.css'
import { Button } from '@mui/material';


const MultiSectionViewer = () => {
    const [cheatsheet, setCheatSheet] = useState([]);

    const cheatSheetFetchData = async () => {
        const response = await fetch('/api/multisectionViwers');
        console.log(response);
        const result = await response.json();
        console.log(result);
        setCheatSheet(result.multisectionViwers);
    }

    useEffect(() => {
        cheatSheetFetchData();
    }, []);

    return (
        <div className='sidebar-main-container'>
                <div className='sidebar-right-div1'>
                    <h1>Hiii ! <br /> Your <strong> Frontend Cheatsheet</strong> Awaits!</h1>
                    <p>We bring designs to life with code and creativity!</p>
                </div>

                <div className='cheatsheet-main-container'>
                    {cheatsheet.map((chtsheet) => {
                        console.log(chtsheet)
                        {chtsheet.chatsheets.map((chtsheet) => {
                            return (
                                <div key={chtsheet.id}>
                                    <div className='center'>
                                        <div className='image-circle'>
                                            <img src={chtsheet.url} alt={chtsheet.title} />
                                        </div>
                                        <h2>{chtsheet.title}</h2>
                                        <p>{chtsheet.subtitle}</p>
                                        <Button variant="contained">{chtsheet.btn}</Button>
                                    </div>
                                </div>
                            )
                        })}
                    })}
                </div>
        </div>
    )
}

export default MultiSectionViewer;