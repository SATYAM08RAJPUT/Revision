import { useState, useEffect } from 'react';
import './multiSectionViewer.css';
import { Button } from '@mui/material';
import Header from '../Home/Header/header';
import { useNavigate, useParams } from 'react-router-dom';

const CourseList = () => {
    const [cheatsheetData, setCheatsheetData] = useState([]);
    const navigate = useNavigate();
    const topicId = useParams();
    console.log(topicId)


    const cheatSheetFetchData = async () => {
        const response = await fetch('/api/courseLists');
        const result = await response.json();
        setCheatsheetData(result.courseLists);
    };

    useEffect(() => {
        cheatSheetFetchData();
    }, [topicId]);

    const handleCoursebtn = (itm) => {
        console.log(itm);
        navigate(`/course/${itm.courseId}/topics/${1}`);
    };


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
                    {cheatsheetData.map((cheatsheet) => (
                        cheatsheet.chatsheets.map((itm, index) => (
                            <div key={itm.id}>
                                <div className='center'>
                                    <div className='image-circle'>
                                        <img src={itm.url} alt={itm.title} />
                                    </div>
                                    <h2>{itm.title}</h2>
                                    <p>{itm.subtitle}</p>
                                    <Button variant="contained" onClick={() => handleCoursebtn(itm)}>
                                        {itm.btn}
                                    </Button>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>

        </>
    );
};

export default CourseList;
