// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const TopicLists = () => {
//     const { courseId } = useParams();
//     // console.log("courseId" ,courseId);

//     const [topicsData, setTopicsData] = useState([]);
//     // console.log("Topics" ,topicsData);

//     const fetchAllTopics = async () => {
//         const response = await fetch(`/api/topics`);
//         console.log(response);
//         const result = await response.json();
//         // console.log("result.topic" , result);
//         setTopicsData(result.topics);
//     };
 
//     useEffect(() => {
//         fetchAllTopics();
//     }, [courseId]); 

//     const filterData = topicsData.filter(item => item.id === courseId);
//     // console.log("filterData", filterData);
    
    
//     return (
//         <>
//             {filterData.map((item) =>{
//                 // console.log(item);
//                 return (
//                     <>
//                         <h1>{item.title}</h1>
//                         <p>{item.content}</p>
//                     </>
//                 )
//             })}
//         </>
//     )
// };

// export default TopicLists;



import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AllDataFile = () => {
    const { courseId } = useParams();
    const [topicsData, setTopicsData] = useState([]);
    const [selectContent , setSelectedContent] = useState({}); 

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

    const handleTopicLi = (itm) =>{
        console.log(itm);
        setSelectedContent(itm)
        const encodedString = `${itm.title}`;
        console.log(encodedString);
        const decodedString = decodeURIComponent(encodedString);
        console.log(decodedString);
        // const pageUrl = `/courseLists/${id}/topics/${decodeURIComponent(itm.title)}`
        // console.log(pageUrl);
        
        // navigate(pageUrl);
        navigate(`/course/${courseId}/topics/${itm.id}`);
    }

    return (
        <div style={{border:'solid', display:'flex', flexDirection:'row'}}>
            <div style={{border:'solid'}}>
                {filterData.map((item) => {
                    // console.log(item);
                    
                    const topicKey = Object.keys(item)[0]; 
                    console.log(topicKey);
                    
                    const topicData = item[topicKey]; 
                    console.log(topicData);

                    return (
                        <div key={topicKey}>
                            <h1>{topicKey}</h1>
                            <ul>
                                {topicData.map((itm) => {
                                    // console.log(itm);
                                    return (
                                        <li key={itm.id} style={{border:'solid' , padding:'20px', cursor:'pointer'}} onClick={() => handleTopicLi(itm)}>
                                            <h2>{itm.title}</h2>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            
            <div style={{border:'solid' , width:'100%'}}>
                {selectContent.content ? (
                    <div>
                        <h1>{selectContent.title}</h1>
                        <div>{selectContent.content}</div>
                    </div>
                ) : ""}
            </div>
        </div>
    );
    
};

export default AllDataFile;



