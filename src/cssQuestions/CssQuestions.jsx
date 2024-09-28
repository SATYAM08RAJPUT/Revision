import React, { useState } from "react";
import './cssQuestions.css';

const CssQuestions = ({ cssData,indexNumber}) => {
    console.log(cssData)
    
    return (
        <div className="question-container">
    {cssData.map((item) => 
        item.cssDataFile[indexNumber].content.map((cont) => {
            console.log(cont);
            if (cont.heading === "CSS Borders") {
                return cont.detailes.map((detail) => {
                    console.log(detail);
                    return  <img key={detail.url} src={detail.url} className="border-image"/>;
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
