import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TopicList.css';
import Header from '../Home/Header/header';
import { IoMdArrowRoundBack } from "react-icons/io";


const AllDataFile = () => {
    const { courseId } = useParams();
    console.log("CourseList",courseId)
    const [topicsData, setTopicsData] = useState([]);
    const [selectContent , setSelectedContent] = useState(0); 

    const navigate = useNavigate();

    const fetchAllTopics = async () => {
        const response = await fetch(`/api/topics`);
        const result = await response.json();
        setTopicsData(result.topics);
    };
 
    useEffect(() => {
        fetchAllTopics();
    }, [courseId]); 

    const filterData = topicsData.filter(item => item.id == courseId);

    const handleTopicLi = (itm) => {
        console.log(itm);
        setSelectedContent(itm)
        navigate(`/course/${courseId}/topics/${itm.id}`);
    }

    console.log(selectContent)
    const handleBackClick = () =>{
        navigate(`/course`)
    }

    return (
        <div className='allData-main-container'>
            <Header />
            <div className='allData-cont-div1'>
                {filterData.map((item) => {                    
                    const topicKey = Object.keys(item)[0]; 
                    // console.log(topicKey);
                    
                    const topicData = item[topicKey]; 
                    console.log(topicData);

                    return (
                        <div key={topicKey}>
                            <div className='all-Data-BackBtn'>
                                <IoMdArrowRoundBack onClick={handleBackClick}/>
                            </div>
                            <ul>
                                {topicData.map((itm) => {
                                    // console.log(itm);
                                    return (
                                        <li key={itm.id} onClick={() => handleTopicLi(itm)}>
                                            <h2>{itm.title}</h2>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            
            <div className='allData-cont-div2'>
                    <div>
                        <h1>{selectContent.title}</h1>
                        <div>{selectContent.content}</div>
                    </div>
            </div>
        </div>
    );
};

export default AllDataFile;



