import React, { useState } from "react";
import './cssQuestions.css';

const CssQuestions = ({ cssData, indexNumber }) => {

    return (
        <div className="question-container">
            {
                cssData.map((item) => item.cssDataFile[indexNumber].content.map((cont) => {
                    return (
                        <>
                            {cont.deff ? <p>{cont.deff}</p> : ""}

                            {
                                (cont.heading == "CSS Borders") ? (
                                    cont.details.map(detail => {
                                        return (
                                            <>
                                                <img key={detail.url} src={detail.url} className="border-image" />
                                            </>
                                        )
                                    })
                                ) : (
                                    <>
                                        <h3 key={cont.heading}>{cont.heading}</h3>
                                        <p>{cont.details}</p>
                                    </>
                                )
                            }
                        </>
                    )
                }))
            }
        </div>
    )
}

export default CssQuestions;