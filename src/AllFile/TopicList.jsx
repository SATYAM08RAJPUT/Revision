import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TopicList.css';
import Header from '../Home/Header/header';
import { IoMdArrowRoundBack } from "react-icons/io";


const AllDataFile = () => {
    const { courseId , topicId} = useParams();
    // console.log(courseId ,topicId);
    
    
    const [topicsData, setTopicsData] = useState([]);
    const [selectContent , setSelectedContent] = useState(null); 
    const [loading , setLoading] = useState(true);

    const navigate = useNavigate();

    const fetchAllTopics = async () => {
        const response = await fetch(`/api/topics`);
        const result = await response.json(); 
        setTopicsData(result.topics);
        setLoading(false);
         
        // const initialTopic = result.topics.find(topic => topic.id == courseId);
        
        // if (initialTopic) {
        //     const initialTopicKey = Object.keys(initialTopic)[0];
        //     // console.log(initialTopicKey)
        //     setSelectedContent(initialTopic[initialTopicKey][0]);
        // }

        if (!selectContent) {
            const initialTopic = result.topics.find(topic => topic.id == courseId);
            if (initialTopic) {
                const initialTopicKey = Object.keys(initialTopic)[0];
                setSelectedContent(initialTopic[initialTopicKey][0]);
            }
        }
    };
 
    useEffect(() => {
        fetchAllTopics();
    }, [courseId , topicId]); 
    

    const filterData = topicsData.filter(item => item.id == courseId);

    const handleTopicLi = (itm) => {
        console.log("topic" ,itm);
        navigate(`/course/${courseId}/topics/${itm.id}`);
        setSelectedContent(itm)
    }

    const handleBackClick = () =>{
        navigate(`/course`)
    }

    if(loading){
        return <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' , fontSize:'30px'}}>
            <i className="fa fa-spinner fa-spin" style={{fontSize:"74px"}}></i>
        </div>
    }

    return (
        <div className='allData-main-container'>
            <Header />
            <div className='allData-cont-div1'>
                {filterData.map((item) => {                    
                    const topicKey = Object.keys(item)[0]; 
                    
                    const topicData = item[topicKey]; 

                    return (
                        <div key={topicKey}>
                            <div className='all-Data-BackBtn'>
                                <IoMdArrowRoundBack onClick={handleBackClick}/>
                            </div>
                            <ul>
                                {topicData.map((topic) => {
                                    return (
                                        <li key={topic.id} onClick={() => handleTopicLi(topic)}>
                                            <h2>{topic.title}</h2>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            
            <div className='allData-cont-div2'>
            {selectContent && (
                    <div>
                        <h1>{selectContent.title}</h1>
                        <div>{selectContent.content}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllDataFile;



