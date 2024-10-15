import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import Header from "../Home/Header/header"

export default function JavaScriptRoadMap() {
    const navigate = useNavigate()
    const [JavascriptRoadMap, setJavaScriptRoadMap] = useState([])
    const fetchCssRoad = async () => {
        const response = await fetch("/api/javaScriptRoadmaps")
        console.log(response)
        const result = await response.json()
        console.log(result)
        setJavaScriptRoadMap(result.javaScriptRoadmaps[0].roadMap)
        console.log(result.javaScriptRoadmaps[0].roadMap)
    }
    useEffect(() => {
        fetchCssRoad()
    }, [])
    console.log(JavascriptRoadMap)

    const handleTopiclick = (item) => {
        navigate(`/course/${item.courseId}/topics/${item.id}`);
    }

    const handleSubTitle =(event,subitem) => {
        event.stopPropagation()
        console.log(subitem)
        navigate(`/course/${subitem.courseId}/topics/${subitem.id}`);
    }  

    return (
        <>  
            <div className="cssRoaaMap">
                <Header />
                {JavascriptRoadMap.map((item) => (
                    <div className="cssBox-Conatiner" onClick={() => handleTopiclick(item)}>
                        <h2>{item.topicName}</h2>
                        <ul className="order-listRoadMap">
                            {item.subTopics.map((subitem) => (
                                <li onClick={(event) => handleSubTitle(event,subitem)}>{subitem.subtitle}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}