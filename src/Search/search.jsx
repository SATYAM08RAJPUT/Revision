import React, { useEffect, useState } from 'react';
import ModalJi from "../Modal/modal";
import { useNavigate, useParams } from 'react-router-dom';
import '../Modal/modal.css'
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const [searchedData, setSearchData] = useState([]);
    const navigate = useNavigate();

    // const {topicId} = useParams();
    // console.log("topicId" ,topicId);
    

    useEffect(() => {
        const fetchApi = async () => {
            if (input) {
                try {
                    const response = await fetch(`/api/topics/search?term=${input}`);
                    const result = await response.json();
                    console.log(result);
                    setSearchData(result);
                } catch (error) {
                    console.log(error);
                    setSearchData([])
                }
            } else {
                setSearchData([]);
            }
        };

        const umMountTimeOut = setTimeout(() => {
            fetchApi();
        }, 300);

        return () => {
            clearTimeout(umMountTimeOut);
        };
    }, [input]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleFilterDataTopic = (topic) => {
        console.log("topic.id" ,topic.id);
        setInput(topic.title);
        // if(topicId === topic.id){
            navigate(`/course/${topic.courseId}/topics/${topic.id}`);
        // }
    };

    return (
        <>
            <ModalJi isOpen={isOpen} onClose={onClose}>
                <div className='search-search-div'>
                    <IoSearchOutline className='searchicon' />
                    <input type='search' value={input} onChange={handleInput} />
                </div>
                <ul>
                    {searchedData.map(topic => (
                        <li key={topic.id} onClick={() => handleFilterDataTopic(topic)}>
                            {topic.title}
                        </li>
                    ))}
                </ul>
            </ModalJi>
        </>
    );
};

export default Search;


// component unmount ke liye kiya krna hoga