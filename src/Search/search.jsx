import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import './search.css'; 
import { useParams } from 'react-router-dom';

const SearchModal = ({ open, onClose }) => {
    const [input, setInput] = useState("");
    const { id } = useParams();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`/api/topics`);
        const result = await response.json();
        console.log(result);
        setData(result.topics);
    };

    useEffect(() => {
        fetchData();
    }, []); 

    const search = () =>{
        const filteredSearchData = data.filter(item => {
            console.log(item)
            const databykey = Object.keys(item)[0]
            console.log(databykey);
            const allData = item[databykey]
            console.log(allData);
        })
        console.log(filteredSearchData);
    }
    
    search();


    const handleSearch = (value) => {
        console.log(value);
        setInput(value);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal-content">
                <div className='headerSearchInp-div'>
                    <input
                        type="text"
                        className='headerSearchInput'
                        placeholder="Search docs"
                        value={input}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
               
               
                <button onClick={onClose}>Close</button>
            </div>
        </Modal>
    );
};

export default SearchModal;
