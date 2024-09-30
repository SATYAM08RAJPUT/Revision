import CssQuestions from "../../cssQuestions/CssQuestions";
import Header from "../../Home/Header/header";
import LeftSideBar from "../leftside/leftside";
import './maintopic.css'
import { useState } from "react";

export default function TopicList({cssData,viewCSS }){
    const [indexNumber,setIndexNumber] =useState(0)
    console.log(viewCSS)

    const onHandleIndex =(id) => {
        setIndexNumber(id)
    }
    return(
        <>
        <Header />
        <div className="section-list">
        <LeftSideBar  onHandleIndex ={onHandleIndex } />
        <CssQuestions cssData ={cssData} indexNumber={indexNumber} />
        </div>
        </>
    )
}