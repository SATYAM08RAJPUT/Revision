import './leftside.css'
import { useState,useEffect } from "react";
export default function LeftSideBar(){
    const [leftSideData, setLeftSideData] = useState([]);

    const leftSideFetchData = async () => {
        const response = await fetch('/api/sidebarContents');
        const result = await response.json();
        console.log(result);
        setLeftSideData(result.sidebarContents);
    };

    useEffect(() => {
        leftSideFetchData()
    }, []);

    return(
        <>
        <div className='leftList-Conatiner'>
        {leftSideData.map((item) => {
            console.log(item)
          return  item.sideBarData.map((item) => {
                    console.log("djbgdog",item)
                return <div className="sidebar">
                        <div>{item.title}</div>
                </div>
            })
        })}
        </div>
        </>
    )
}