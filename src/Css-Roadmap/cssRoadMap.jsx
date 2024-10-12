import { useEffect, useState } from "react"
import './cssRoadMap.css'
import { useNavigate } from "react-router-dom"
export default function CssRoadMap(){
    const navigate =useNavigate()

    const [cssRoadMap,setCssRoadMap] = useState([])
    const fetchCssRoad = async() => {
        const response = await fetch("/api/cssRoadmaps")
        console.log(response)
        const result = await response.json()
        setCssRoadMap(result.cssRoadmaps[0].roadMap)
        console.log(result.cssRoadmaps[0].roadMap)
    }
    useEffect(() => {
        fetchCssRoad()
    },[])  
    console.log(cssRoadMap)

    const handleTopiclick =(item) => {
        navigate(`/course/${item.courseId}/topics/${item.id}`);
    }
            return(
            <>
            <div className="cssRoaaMap">
            {cssRoadMap.map((item) => (
                <div className="cssBox-Conatiner" onClick={() => handleTopiclick(item)}>
                    <h2>{item.topicName}</h2>
                    <ul className="order-listRoadMap">
                       {item.subTopics.map((subitem) => (
                        <li>{subitem}</li>
                       ))}
                    </ul>
                </div>
            ))}
            </div>
            </>
        )
}