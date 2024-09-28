import React, { useState } from "react";
import './cssQuestions.css';

const CssQuestions = ({ cssData, indexNumber }) => {
    console.log(cssData)

    return (
        <div className="question-container">
            {
                cssData.map((item) => item.cssDataFile[indexNumber].content.map((cont, index) => {
                    return (
                        (cont.heading == "CSS Margins") ?
                            <>
                                <h3>{cont.heading}</h3>
                                <p>{cont.def}</p>
                                <ul>
                                    {
                                        cont.details.map(item => <li>{item.name}</li>)
                                    }
                                </ul>
                            </> : <>
                                <h3>{cont.heading}</h3>
                                <p>{cont.details}</p>
                                {
                                    cont.diff ? <p style={{ border: "solid" }}>{cont.diff}</p> : ""
                                }
                            </>
                    )
                }))
            }

        </div>
    )
}

export default CssQuestions;