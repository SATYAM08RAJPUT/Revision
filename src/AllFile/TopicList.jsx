import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TopicList.css';
import Header from '../Home/Header/header';
import { IoMdArrowRoundBack } from "react-icons/io";


const AllDataFile = () => {
    const { courseId } = useParams();
    const [topicsData, setTopicsData] = useState([]);
    const [selectContent, setSelectedContent] = useState(null);

    const navigate = useNavigate();

    const fetchAllTopics = async () => {
        const response = await fetch(`/api/topics`);
        const result = await response.json();
        setTopicsData(result.topics);

        const initialTopic = result.topics.find(topic => topic.id == courseId);
        if (initialTopic) {
            const initialTopicKey = Object.keys(initialTopic)[0];
            console.log(initialTopicKey)
            setSelectedContent(initialTopic[initialTopicKey][0]);
        }
    };

    useEffect(() => {
        fetchAllTopics();
    }, [courseId]);

    const filterData = topicsData.filter(item => item.id == courseId);

    const handleTopicLi = (itm) => {
        setSelectedContent(itm)
        navigate(`/course/${courseId}/topics/${itm.id}`);
    }

    const handleBackClick = () => {
        navigate(`/course`)
    }

    if (!topicsData || !selectContent) {
        return <h2>Loading</h2>
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
                                <IoMdArrowRoundBack onClick={handleBackClick} />
                            </div>
                            <ul>
                                {topicData.map((itm) => (
                                    <li key={itm.id} onClick={() => handleTopicLi(itm)}>
                                        <h2>{itm.title}</h2>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <div className='allData-cont-div2'>
                {selectContent.content && (
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



