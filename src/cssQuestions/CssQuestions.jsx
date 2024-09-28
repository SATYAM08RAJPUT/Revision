
import React, { useState } from "react";

const CssQuestions = ({ data, searchText, SetSearchText }) => {
    console.log(data)

    // const [showModal, setShowModal] = useState()
    // // const filterableData = data.map(item => item.cssDataFile.map(item1 => ))
    // console.log(filterableData)

    // const handleModal = () =>{

    // }

    return (
        <div className="question-container">
            {
                data.map((item) => item.cssDataFile[1].content.map((cont,index) => {
                    return (
                        <>
                            <h3>{cont.heading}</h3>
                            <p>{cont.details}</p>
                        </>
                    )
                }))
            }

        </div>
    )
}

export default CssQuestions;