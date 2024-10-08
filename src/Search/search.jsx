import { useEffect, useState } from 'react';
import Modal from '../Modal/modal';
import './search.css';
import { useNavigate, useParams } from 'react-router-dom';

const SearchModal = ({ handleClose, handleOpen }) => {
    const [input, setInput] = useState('')
    const [inputData, setInputData] = useState("")
    const navigate = useNavigate()
    
    const handleSearch = async(e) => {
        setInput(e.target.value)
        const response = await fetch(`/api/search?q=${input}`)
        const result = await response.json()
        // console.log(result,"///////////////////")
        setInputData(result)
    }

    const handleFindIt = (item) => {
        navigate(`/course/${item.courseId}/topics/${item.id}`)
    }

    return (
        <>
            <Modal isclose={handleClose} isopen={handleOpen}>
                <div className='modal'>
                    <div>
                        <input type='search' placeholder='Search a Topic......' onChange={handleSearch} value={input} />
                    </div>
                    {/* {inputData && inputData.map((item) => {
                        // console.log(item)
                        return <>
                            <h2 onClick={() => handleFindIt(item)}>{item.title}</h2>
                        </>
                    })} */}
                </div>
            </Modal>
        </>
    )
};

export default SearchModal;
