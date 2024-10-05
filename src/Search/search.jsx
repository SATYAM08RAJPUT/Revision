import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import './search.css'; 
import { useParams } from 'react-router-dom';

const SearchModal = ({ open, onClose }) => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/topics`);
            const result = await response.json();
            setData(result.topics);
        };

        fetchData();
    }, []);     

    const filteredData = data.flatMap(item => {
        console.log(item); 
        const key = Object.keys(item)[0];
        return item[key].filter(subItem =>
            subItem.title.toLowerCase().includes(input.toLowerCase())
        );
    });

    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal-content">
                <div className='headerSearchInp-div'>
                    <input
                        type="text"
                        className='headerSearchInput'
                        placeholder="Search docs"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>

                <div className="search-results">
                    {input && filteredData.map((item, id) => (
                            <div key={id} className="search-item">
                                {item.title}
                            </div>
                        ))}
                        
                </div>

                <button onClick={onClose}>Close</button>
            </div>
        </Modal>
    );
};

export default SearchModal;
