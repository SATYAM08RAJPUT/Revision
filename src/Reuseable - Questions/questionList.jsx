import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './questionList.css'
import Header from "../Home/Header/header"
export default function QuestioList() {
    const navigate = useNavigate()
    const { id , title} = useParams()
    console.log(id)
    const [questionList, setQuestionList] = useState([])
    const [rightSideData, setRightSideData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/topics')
            console.log(response)
            const result = await response.json()
            console.log(result) 
            setQuestionList(result.topics)
        }
        fetchData()
    }, [])
    console.log(questionList)
    const filterList = questionList.filter(itm => itm.id == id);
    console.log(filterList);

    function handleClickDescription(item) {
        console.log(item);
        setRightSideData(item);
        // navigate(`/Course/${id}/Subtopic/${item.title}`)
    }
    console.log(rightSideData)

    return (
        <>
        <Header />
            <div className="third-pagecontainer">
            <div className="third-page">
                {filterList.map((item) => {
                    console.log(item)
                    const hrlpart = Object.keys(item)[0]
                    console.log(hrlpart)
                    const convert = item[hrlpart]
                    console.log(convert)
                    return convert.map((item) => {
                        return <div>
                            <h2 onClick={() => handleClickDescription(item)}>{item.title}</h2>
                        </div>
                    })
                })}
                </div>
                <div className="third-pagecontent">
                    {
                        rightSideData.content ? (
                            <>
                                <p>{rightSideData.content}</p>
                            </>
                        ) : ""
                    }
                </div>
            </div>
            {/* </div> */}
        </>
    );

}