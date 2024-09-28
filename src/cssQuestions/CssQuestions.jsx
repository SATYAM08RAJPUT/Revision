import React, { useState } from "react";
import './cssQuestions.css';

const CssQuestions = ({ cssData,indexNumber}) => {
    console.log(cssData)

    return (
        <div className="question-container">
            {
                cssData.map((item) => item.cssDataFile[indexNumber].content.map((cont, index) => {
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