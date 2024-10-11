import React, { useEffect, useState } from 'react';
import ModalJi from "../Modal/modal";
import { useNavigate, useParams } from 'react-router-dom';
import '../Modal/modal.css'
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const [searchedData, setSearchData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0)
    const navigate = useNavigate();


    useEffect(() => {
        const fetchApi = async () => {
            if (input) {
                try {
                    const response = await fetch(`/api/topics/search?term=${input}`);
                    const result = await response.json();
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
        navigate(`/course/${topic.courseId}/topics/${topic.id}`);
        onClose();
    };

    console.log(searchedData)

    const handleKeyDown = (event) => {
        console.log(event)
        if (event.key === "ArrowUp") {
            setActiveIndex((preIndex) => Math.max(preIndex - 1, 0))
            console.log(activeIndex)
        } else if (event.key === "ArrowDown") {
            setActiveIndex((preIndex) => Math.min(preIndex + 1, searchedData.length - 1))
            console.log(activeIndex)
        } else if (event.key === "Enter") {
            handleFilterDataTopic(searchedData[activeIndex])
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [activeIndex])

    return (
        <>
            <ModalJi isOpen={isOpen} onClose={onClose}>
                <div className='search-search-div'>
                    <IoSearchOutline className='searchicon' />
                    <input type='search' value={input} onChange={handleInput} />
                </div>
                <ul>
                    {searchedData.map((topic, index) => (
                        <li key={topic.id} onClick={() => handleFilterDataTopic(topic)} style={{ backgroundColor: index === activeIndex ? "hsl(24.6 95% 53.1%)" : "" }}>
                            {topic.title}
                        </li>
                    ))}
                </ul>
            </ModalJi>
        </>
    );
};

export default Search;


