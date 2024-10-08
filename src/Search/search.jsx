import React, { useEffect, useState } from 'react';
import ModalJi from "../Modal/modal";
import { useNavigate, useParams } from 'react-router-dom';

const Search = ({ isOpen, onClose }) => {
    const [input , setInput] = useState('');
    // console.log("input Value" ,input);

    const [searchedData , setSearchData] = useState([]);
    // console.log(searchedData);

    // const { courseId } = useParams();
    // console.log(courseId);
    
    const navigate = useNavigate();

    useEffect(() =>{
        if(input){
            const fetchApi = async () =>{
                const response = await fetch(`/api/topics/search?term=${input}`);
                const result = await response.json();
                setSearchData(result) 
            } 
        fetchApi();
        }
    }, [input])
    

    const handleInput = (e) => {    
        setInput(e.target.value);
    }

    const handleFilterDataTopic = (topic) =>{
        // console.log(courseId)
        setInput(topic.title)
        // if(courseId === topic.id){
        //     // navigate(`/course/${courseId}/topics/${topic.id}`)  
        // }
    }
    
    
    return (
        <>
            <ModalJi isOpen={isOpen} onClose={onClose}>
                <input type='search' value={input} onChange={handleInput}/>
                <ul>
                    {searchedData && searchedData.map(topic => (
                        <li key={topic.id} onClick={() => handleFilterDataTopic(topic)}>{topic.title}</li>
                    ))}
                </ul>
                
            </ModalJi>
        </>
    );
};

export default Search;
