import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import './search.css'; 
import { IoSearchOutline } from "react-icons/io5";
import { VscSearchFuzzy } from "react-icons/vsc";

const SearchModal = ({ open, onClose }) => {
    const storedInputItem = JSON.parse(localStorage.getItem('input'));
    console.log(storedInputItem);

    const [input, setInput] = useState(storedInputItem);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/topics`);
            const result = await response.json();
            setData(result.topics);
        };
        fetchData();
    }, []);
    
    useEffect(() =>{
        localStorage.setItem('input' , JSON.stringify(input))
        console.log(input);
    }, [input])

    const filteredData = data.flatMap(item => {
        console.log(item); 
        const key = Object.keys(item)[0];
        return item[key].filter(subItem =>
            subItem.title.toLowerCase().includes(input.toLowerCase())
        );
    });
    console.log(filteredData);

    const handleSearchItem = (item) =>{
        console.log(item.title);
        setInput(item.title)
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal-content">
             <div className='search-closeBtn-div'><button onClick={onClose}>X</button></div>
                <div className='headerSearchInp-div'>
                <IoSearchOutline className='searchicon' />
                    <input
                        type="text"
                        className='headerSearchInput'
                        placeholder="Search docs"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>

                <div className="search-results" >
                    {input && filteredData.map((item, id) => (
                            <div key={id} className="search-item" onClick={() => handleSearchItem(item)}>
                                <p>{item.title}</p>
                            </div>
                        ))}
                </div>
            </div>
        </Modal>
    );
};

export default SearchModal;
