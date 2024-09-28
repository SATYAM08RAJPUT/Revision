import React, { useState } from "react";
import './cssQuestions.css';

const CssQuestions = ({ cssData,indexNumber}) => {
    console.log(cssData)
    
    return (
        <div className="question-container">
    {cssData.map((item) => 
        item.cssDataFile[indexNumber].content.map((cont) => {
            console.log(cont);
            <div>
                       <h3>{cont.heading}</h3>
                       <p>{cont.details}</p>
            </div>
            if (cont.heading === "CSS Borders") {
                return cont.details.map((detail) => {
                    console.log(detail);
                    return <div>
                        <img key={detail.url} src={detail.url} />;
                    </div> 
                });
            } else {
                return (
                    <>
                        <h3 key={cont.heading}>{cont.heading}</h3>
                        <p>{cont.details}</p>
                    </>
                );
            }
        })
    )
}


        </div>
    )
}

export default CssQuestions;
