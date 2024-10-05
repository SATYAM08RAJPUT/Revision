import React, { useEffect, useState } from "react";
import './cssQuestions.css';
import { useParams } from "react-router-dom";

const CssQuestions = ({filteredTopic}) => {
    const {courseId, topicId} = useParams();
    // console.log(topicId)

    // const [topicDescription,setTopicDescription] = useState([]);

    // const rightSideDataFetch = async () =>{
    //     const response = await fetch(`/api/description`);
    //     const data = await response.json();
    //     // console.log(data);
    //     setTopicDescription(data.descriptions[0].descriptions)
    // }

    useEffect(() =>{
        // rightSideDataFetch();
    },[])

    // const filteredDescription = filteredTopic.filter(item =>{
    //     console.log(item)
    //     let description = [];
    //     if(item.descriptions[0].topicId == topicId){
    //         description.push(item);
    //     }
    //     return description;
    // })
    // console.log(filteredDescription);
    return (
        <div className="question-container">
            {/* {
                filteredDescription.map((des,index) =>{
                    return (
                        <>
                            <div key={index}>
                                <h3>{des.description}</h3>
                            </div>
                        </>
                    )
                })
            } */}
        </div>
    )
}

export default CssQuestions;