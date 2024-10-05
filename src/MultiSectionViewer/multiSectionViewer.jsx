import { useState, useEffect } from 'react';
import './multiSectionViewer.css';
import { Button } from '@mui/material';
import Header from '../Home/Header/header';
import { useNavigate, useParams } from 'react-router-dom';

<<<<<<< HEAD
const MultiSectionViewer = () => {
=======
const CourseList = () => {
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
    const navigate = useNavigate();

    const [cheatsheetData, setCheatsheetData] = useState([]);

    const cheatSheetFetchData = async () => {
<<<<<<< HEAD
        const response = await fetch(`/api/course`);
        const result = await response.json();
        console.log(result.courses);
        setCheatsheetData(result.courses);
=======
        const response = await fetch('/api/courseLists');
        const result = await response.json();
        console.log(result);
        setCheatsheetData(result.courseLists);
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
    };

    useEffect(() => {
        cheatSheetFetchData();
<<<<<<< HEAD
    }, []);
=======
    }, []); 

    const handleCoursebtn = (id) => {
        console.log(id);
        navigate(`/course/${id}`);
      };
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4

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
<<<<<<< HEAD
                    {cheatsheetData.map((item, index) => (
                        <div key={item.id}>
                            <div className='center'>
                                <div className='image-circle'>
                                    <img src={item.url} alt={item.title} />
=======
                    {cheatsheetData.map((cheatsheet) => (
                        cheatsheet.chatsheets.map((itm,index) => (
                            <div key={itm.id}>
                                <div className='center'>
                                    <div className='image-circle'>
                                        <img src={itm.url} alt={itm.title} />
                                    </div>
                                    <h2>{itm.title}</h2>
                                    <p>{itm.subtitle}</p>
                                    <Button variant="contained" onClick={() => handleCoursebtn(itm.id)}>
                                        {itm.btn}
                                    </Button>
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
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

export default CourseList;

