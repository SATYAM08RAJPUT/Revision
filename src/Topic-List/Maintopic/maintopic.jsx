<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom";
import CssQuestions from "../../cssQuestions/CssQuestions";
=======
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
import Header from "../../Home/Header/header";
// import LeftSideBar from "../leftside/leftside";
import './maintopic.css'
import { useEffect, useState } from "react";

<<<<<<< HEAD
export default function TopicList() {
    const { courseId, topicId } = useParams();
    const [course, setCourse] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null)
    const navigate = useNavigate();
=======
export default function TopicList({onHandleIndex}){
    
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4

    useEffect(() =>{
        fetch(`/api/course/${courseId}`)
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setCourse(data);
        })
    },[courseId])


    const handleTopicClick = (id) => {
        navigate(`/courses/${courseId}/topicList/${id}`)
    }
    // const filteredTopic = topics.filter(topic => topic.id == courseId);
    return (
        <>
<<<<<<< HEAD
            <Header />
            <div className="section-list">
                {/* <LeftSideBar handleTopicClick={handleTopicClick} topics={topics} setTopics={setTopics} filteredTopic={filteredTopic} /> */}
                <div className='leftList-Conatiner'>
                    {/* {filteredTopic.map((topic, index) => {
                        console.log(topic)
                        return <div key={index} onClick={() => handleTopicClick(index + 1)} className="sidebar">{topic.name}</div>

                    })} */}
                </div>
                {/* <CssQuestions filteredTopic={filteredTopic} /> */}
            </div>
=======
        <Header />
        <div className="section-list">
        <LeftSideBar onHandleIndex ={onHandleIndex } />
        </div>
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
        </>

    )
}