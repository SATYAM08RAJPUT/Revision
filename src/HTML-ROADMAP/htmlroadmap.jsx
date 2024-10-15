import { useEffect, useState } from "react"
import './htmlroadmap.css'
import { useNavigate } from "react-router-dom"
import Header from "../Home/Header/header"

export default function HtmlRoadMap() {
    const navigate = useNavigate()

    const [htmlRoadMap, setHtmlRoadMap] = useState([])
    const fetchCssRoad = async () => {
        const response = await fetch("/api/htmlRoadmaps")
        console.log(response)
        const result = await response.json()
        console.log(result)
        setHtmlRoadMap(result.htmlRoadmaps[0].roadMap)
        console.log(result.htmlRoadmaps[0].roadMap)
    }
    useEffect(() => {
        fetchCssRoad()
    }, [])
    console.log(htmlRoadMap)

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
                {htmlRoadMap.map((item) => (
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