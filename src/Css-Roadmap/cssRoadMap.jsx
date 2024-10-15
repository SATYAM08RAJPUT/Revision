import { useEffect, useState } from "react"
import './cssRoadMap.css'
import { useNavigate } from "react-router-dom"
import Header from "../Home/Header/header"


export default function CssRoadMap() {
    const navigate = useNavigate()
    const [cssRoadMap, setCssRoadMap] = useState([])
    const [loading , setLoading] = useState(true);

    const fetchCssRoad = async () => {
        const response = await fetch("/api/cssRoadmaps")
        console.log(response)
        const result = await response.json()
        setCssRoadMap(result.cssRoadmaps[0].roadMap)
        setLoading(false);
    }
    useEffect(() => {
        fetchCssRoad()
    }, [])
    console.log(cssRoadMap);

    const handleTopiclick = (item) => {
        navigate(`/course/${item.courseId}/topics/${item.id}`);
    }

    const handleSubTitle =(event,subitem) => {
        event.stopPropagation()
        console.log(subitem)
        navigate(`/course/${subitem.courseId}/topics/${subitem.id}`);
    } 

    const handleBack = () =>{
        navigate(`/course`)
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
        <>
            <div>
                <Header />

                <div className="back-button-div">
                    <div>
                        <h1>Road Map:</h1>
                        <br />
                        <h1 style={{color:'hsl(24.6, 95%, 53.1%)', fontSize:'50px'}}>Css Road Map</h1>
                    </div>
                    <button className="back-button" onClick={handleBack}>Back</button>
                </div>

                <div className="cssRoaaMap">
                    {cssRoadMap.map((item) => (
                        <div
                            key={item.topicName}
                            className="cssBox-Conatiner"
                            onClick={() => handleTopicClick(item)}
                        >
                            <h2>{item.topicName}</h2>
                            <ul className="order-listRoadMap">
                                {item.subTopics.map((subitem) => (
                                    <li
                                        key={subitem.subtitle}
                                        onClick={(event) => handleSubTitle(event, subitem)}
                                    >
                                        {subitem.subtitle}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}