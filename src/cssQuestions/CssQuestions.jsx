
import React, { useState } from "react";

const CssQuestions = ({ data, searchText, SetSearchText }) => {

    const [showModal, setShowModal] = useState()
    // const filterableData = data.map(item => item.cssDataFile.map(item1 => ))
    console.log(filterableData)

    const handleModal = () =>{
 
    }

    return (
        <div className="question-container">
            <h3>css Question</h3>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <form>
                    <input type="search" value={searchText} placeholder="Search" onChange={(e) => SetSearchText(e.target.value)} ></input>
                </form>
                <button onClick={handleModal} >Add new question</button>
            </div>
            {
                data && data.map((item, index) => {
                    return (
                        <>
                            {
                                item.cssDataFile[0].Questions.map((item, index) => {
                                    return (
                                        <>
                                            <h4>Question {index + 1} {item.Question}</h4>
                                            <p>Answer: {item.Answer}</p>
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </div>
    )
}

export default CssQuestions;