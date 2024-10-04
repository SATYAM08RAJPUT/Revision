import Header from "../../Home/Header/header";
import LeftSideBar from "../leftside/leftside";
import './maintopic.css'
import { useState } from "react";

export default function TopicList({onHandleIndex}){
    

    return(
        <>
        <Header />
        <div className="section-list">
        <LeftSideBar onHandleIndex ={onHandleIndex } />
        </div>
        </>
    )
}