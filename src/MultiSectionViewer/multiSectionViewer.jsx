import { useState, useEffect } from 'react';
import './multiSectionViewer.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MultiSectionViewer = () => {
    const [cheatsheetData, setCheatsheetData] = useState([]);
    console.log(cheatsheetData);


    const cheatSheetFetchData = async () => {
        const response = await fetch('/api/multiSections');
        const result = await response.json();
        console.log(result);
        setCheatsheetData(result.multiSections);
    };

    useEffect(() => {
        cheatSheetFetchData();
    }, []);

    return (
        <div className='sidebar-main-container'>
            <div className='sidebar-right-div1'>
                <h1>Hiii ! <br /> Your <strong>Frontend Cheatsheet</strong> Awaits!</h1>
                <p>We bring designs to life with code and creativity!</p>
            </div>

            <div className='cheatsheet-main-container'>
                {cheatsheetData.map((cheatsheet) => (
                    cheatsheet.chatsheets.map((itm) => (
                        <div key={itm.id}>
                            <div className='center'>
                                <div className='image-circle'>
                                    <img src={itm.url} alt={itm.title} />
                                </div>
                                <h2>{itm.title}</h2>
                                <p>{itm.subtitle}</p>
                                <Button variant="contained">
                                    <Link to={"/topicList"}>{itm.btn}</Link>
                                </Button>
                            </div>
                        </div>
                    ))

                ))}
            </div>
        </div>
    );
};

export default MultiSectionViewer;
