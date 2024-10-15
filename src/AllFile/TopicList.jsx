// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './TopicList.css';
// import Header from '../Home/Header/header';
// import { IoMdArrowRoundBack } from "react-icons/io";


// const AllDataFile = () => {
//     const { courseId , topicId} = useParams();

//     const [topicsData, setTopicsData] = useState([]);
//     // console.log(topicsData);

//     const [selectContent , setSelectedContent] = useState(0);
//     // console.log(selectContent);

//     const [loading , setLoading] = useState(true);

//     const navigate = useNavigate();

//     const fetchAllTopics = async () => {    
//         const response = await fetch(`/api/topics`);

//         const result = await response.json(); 
//         setTopicsData(result.topics);
//         setLoading(false);


//             const course = result.topics.find(topic => topic.id == courseId);

//             if (course) {
//                 const initialTopicKey = Object.keys(course)[0];
//                 setSelectedContent(course[initialTopicKey][(parseInt(topicId)-1) || 0])
//             }
//     };

//     useEffect(() => {
//         fetchAllTopics();
//     }, [courseId , topicId]); 


//     const filterData = topicsData.filter(item => item.id == courseId);

//     const handleTopicLi = (itm) => {
//         navigate(`/course/${courseId}/topics/${itm.id}`);
//     }


//     const handleBackClick = () =>{
//         navigate(`/course`)
//     }


//     if (loading) {
//         return (
//             <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: '100vh',
//                 width: '100%',
//                 fontSize: '30px'
//             }}>
//                 <i className="fa fa-spinner fa-spin" style={{ fontSize: "74px" }}></i>
//             </div>
//         );
//     }

//     return (
//         <div className='allData-main-container'>
//             <Header topicData={filterData} />
//             <div className='allData-cont-div1'>
//                 {filterData.map((item) => {                    
//                     const topicKey = Object.keys(item)[0]; 

//                     const topicData = item[topicKey]; 

//                     return (
//                         <div key={topicKey}>
//                             <div className='all-Data-BackBtn'>
//                                 <IoMdArrowRoundBack onClick={handleBackClick}/>
//                             </div>
//                             <ul>
//                                 {topicData.map((topic) => {
//                                         const isSelected = topic.id == topicId;
//                                         // console.log(isSelected)
//                                     return (
//                                         <li key={topic.id} onClick={() => handleTopicLi(topic)} className={isSelected ? "selectedTopic" : ""}>
//                                             <p>{topic.title}</p>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//                     );
//                 })}
//             </div>

//             <div className='allData-cont-div2'>
//             {selectContent.content && (
//                     <div>
//                         <h1>{selectContent.title}</h1>
//                         <div>{selectContent.content}</div>
//                         <div className='code-example'>
//                             <pre><code>{selectContent.code}</code></pre>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AllDataFile;




















// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './TopicList.css';
// import Header from '../Home/Header/header';
// import { IoMdArrowRoundBack } from "react-icons/io";


// const AllDataFile = () => {
//     const { courseId , topicId} = useParams();

//     const [topicsData, setTopicsData] = useState([]);
//     // console.log(topicsData);

//     const [selectContent , setSelectedContent] = useState(0);
//     // console.log(selectContent);

//     const [loading , setLoading] = useState(true);

//     const navigate = useNavigate();

//     const fetchAllTopics = async () => {    
//         const response = await fetch(`/api/topics`);

//         const result = await response.json(); 
//         setTopicsData(result.topics);
//         setLoading(false);


//             const course = result.topics.find(topic => topic.id == courseId);

//             if (course) {
//                 const initialTopicKey = Object.keys(course)[0];
//                 setSelectedContent(course[initialTopicKey][(parseInt(topicId)-1) || 0])
//             }
//     };

//     useEffect(() => {
//         fetchAllTopics();
//     }, [courseId , topicId]); 


//     const filterData = topicsData.filter(item => item.id == courseId);

//     const handleTopicLi = (itm) => {
//         navigate(`/course/${courseId}/topics/${itm.id}`);
//     }


//     const handleBackClick = () =>{
//         navigate(`/course`)
//     }


//     if (loading) {
//         return (
//             <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: '100vh',
//                 width: '100%',
//                 fontSize: '30px'
//             }}>
//                 <i className="fa fa-spinner fa-spin" style={{ fontSize: "74px" }}></i>
//             </div>
//         );
//     }

//     return (
//         <div className='allData-main-container'>
//             <Header topicData={filterData} />
//             <div className='allData-cont-div1'>
//                 {filterData.map((item) => {                    
//                     const topicKey = Object.keys(item)[0]; 

//                     const topicData = item[topicKey]; 

//                     return (
//                         <div key={topicKey}>
//                             <div className='all-Data-BackBtn'>
//                                 <IoMdArrowRoundBack onClick={handleBackClick}/>
//                             </div>
//                             <ul>
//                                 {topicData.map((topic) => {
//                                         const isSelected = topic.id == topicId;
//                                         // console.log(isSelected)
//                                     return (
//                                         <li key={topic.id} onClick={() => handleTopicLi(topic)} className={isSelected ? "selectedTopic" : ""}>
//                                             <p>{topic.title}</p>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//                     );
//                 })}
//             </div>

//             <div className='allData-cont-div2'>
//             {selectContent.content && (
//                     <div>
//                         <h1>{selectContent.title}</h1>
//                         <div>{selectContent.content}</div>
//                         <div className='code-example'>
//                             <pre><code>{selectContent.code}</code></pre>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AllDataFile;






import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TopicList.css';
import Header from '../Home/Header/header';
import { IoMdArrowRoundBack } from "react-icons/io";
import useArrowPress from '../CustomHook/useArrowPress';

const AllDataFile = () => {
    const { courseId, topicId } = useParams();

    const [topicsData, setTopicsData] = useState([]);
    // console.log(topicsData);

    const [selectContent, setSelectedContent] = useState(0);
    // console.log(selectContent);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const fetchAllTopics = async () => {
        const response = await fetch(`/api/topics`);

        const result = await response.json();
        setTopicsData(result.topics);
        setLoading(false);

        const course = result.topics.find(topic => topic.id == courseId);

        if (course) {
            const initialTopicKey = Object.keys(course)[0];
            setSelectedContent(course[initialTopicKey][(parseInt(topicId) - 1) || 0])
        }
    };

    useEffect(() => {
        fetchAllTopics();
    }, [courseId, topicId]);


    const filterData = topicsData.filter(item => item.id == courseId);
    console.log(filterData)

    // const topicData = filterData.length > 0 ? Object.values(filterData[0])[0] : [];
    
    const handleTopicLi = (itm) => {
        navigate(`/course/${courseId}/topics/${itm.id}`);
    }
    
    // const {activeIndex} = useArrowPress(topicData,handleTopicLi)
    // console.log(activeIndex);
    


    const handleBackClick = () => {
        // navigate(`/course`)
        // navigate(`/course/${courseId}/allRoadmaps/${courseId}`)

        if(courseId === "1"){
             navigate(`/course/HTMLRoadMap`);
        } else if(courseId === "2"){
            navigate(`/course/cssRoadMap`);
        } else if(courseId === "3"){
            navigate(`/course/JavaScriptRoadMap`);
        }else if(courseId === "4"){
            navigate(`/course/ReactRoadMap`);
        }
    }


    if (loading) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
                fontSize: '30px'
            }}>
                <i className="fa fa-spinner fa-spin" style={{ fontSize: "74px" }}></i>
            </div>
        );
    }

    return (
        <div className='allData-main-container'>
            <Header topicData={filterData} />
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
                                {topicData.map((topic) => {
                                    const isSelected = topic.id == topicId;
                                    // console.log(isSelected)
                                    return (
                                        <li key={topic.id} onClick={() => handleTopicLi(topic)} className={isSelected ? "selectedTopic" : ""}>
                                            <p>{topic.title}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <div className='allData-cont-div2'>
                {selectContent.content && (
                    <div>
                        <h1 style={{color:'hsl(24.6 95% 53.1%)' , fontSize:'40px'}}>{selectContent.title}</h1>
                        <h3>{selectContent.Definition}</h3>
                        <div>{selectContent.content}</div>
                        <h3>{selectContent.ex}</h3>
                        <h2>{selectContent.function}</h2>

                        <div className='code-example'>
                            {selectContent && selectContent.info ? (
                                <>
                                    <ul>
                                        <li>
                                            <pre><code>{selectContent.info}</code></pre>
                                        </li>
                                    </ul>
                                </>
                            ) : ""}
                            <pre><code>{selectContent.code}</code></pre>

                            <h3>{selectContent.ex2}</h3>    

                            {selectContent && selectContent.code2 ? (
                                <pre><code>{selectContent.code2}</code></pre>
                            ):''}
                        </div>
                    </div>
                )}
            </div>
        </div >
        
        // <div className='allData-main-container'>
        // <Header topicData={filterData} />
        // <div className='allData-cont-div1'>
        // <div className='all-Data-BackBtn'>
        //             <IoMdArrowRoundBack onClick={handleBackClick} />
        //         </div>
        //         <ul>
        //             {topicData.map((topic,index) => {
        //                 const isSelected = topic.id == topicId;
        //                 return (
        //                     <li key={topic.id} onClick={() => handleTopicLi(topic)} className={isSelected ? "selectedTopic" : ""} >
        //                         <p>{topic.title}</p>
        //                     </li>
        //                 );
        //             })}
        //         </ul>
        //         );
      
        // </div>

        // <div className='allData-cont-div2'>
        //     {selectContent.content && (
        //         <div>
        //             <h1>{selectContent.title}</h1>
        //             <div>{selectContent.content}</div>
        //             <div className='code-example'>
        //                 <pre><code>{selectContent.code}</code></pre>
        //             </div>
        //         </div>
        //     )}
        // </div>
    // </div>
    );
};

export default AllDataFile;

