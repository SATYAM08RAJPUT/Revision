import { useState, useEffect } from 'react';
import './multiSectionViewer.css';
import { Button } from '@mui/material';

import Header from '../Home/Header/header';
import { useNavigate, useParams } from 'react-router-dom';

const MultiSectionViewer = () => {
    const navigate = useNavigate();
    const [cheatsheetData, setCheatsheetData] = useState([]);

    const cheatSheetFetchData = async () => {
        const response = await fetch(`/api/course`);
        const result = await response.json();
        console.log(result.courses);
        setCheatsheetData(result.courses);
    };

    useEffect(() => {
        cheatSheetFetchData();
    }, []);

    const handleCourseClick = (id) => {
        navigate(`/courses/${id}/topicList`)
    }

    return (
        <>
            <Header />
            <div className='sidebar-main-container'>
                <div className='sidebar-right-div1'>
                    <h1 className='right1'>Hiii !</h1>
                    <h1>Your <strong>Frontend Cheatsheet</strong> Awaits!</h1>
                    <p>We bring designs to life with code and creativity!</p>
                </div>

                <div className='cheatsheet-main-container'>
                    {cheatsheetData.map((item, index) => (
                        <div key={item.id}>
                            <div className='center'>
                                <div className='image-circle'>
                                    <img src={item.url} alt={item.title} />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.subtitle}</p>
                                <Button variant="contained" onClick={() => handleCourseClick(item.id)}>
                                    {item.btn}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default MultiSectionViewer;

