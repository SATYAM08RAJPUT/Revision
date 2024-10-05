import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import './search.css'; 
import { useNavigate, useParams } from 'react-router-dom';

const SearchModal = ({ open, onClose }) => {
    const searchId = useParams()
    const navigate = useNavigate()
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
        // console.log(item); 
        const key = Object.keys(item)[0];
        // console.log(key)
        return item[key].filter(subItem =>
            subItem.title.toLowerCase().includes(input.toLowerCase())
        );
    });
    console.log(filteredData)

    function handleTopic(id){
        const filterData = data.filter(item => item.id == searchId);
        console.log(filterData)    
        console.log(id)
        navigate(`/course/${searchId}/topics/${id}`);
    }

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
                            <div key={id} className="search-item" onClick={() => handleTopic(item.id)}>
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
