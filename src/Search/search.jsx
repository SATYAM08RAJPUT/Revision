import { useEffect, useState } from 'react';
import Modal from '../Modal/modal';
import './search.css';
import { useNavigate, useParams } from 'react-router-dom';

const SearchModal = ({ handleClose, handleOpen }) => {
    const [input, setInput] = useState('')
    const [inputData, setInputData] = useState("")

    const navigate = useNavigate()
    const handleSearch = (e) => {
        setInput(e.target.value)
        const fetchFilterData = async () => {
            const response = await fetch(`/api/search?q=${input}`)
            console.log(response)
            const result = await response.json()
            console.log(result)
            setInputData(result[1])   
        }
        console.log(inputData)
        fetchFilterData() 
    }

    const handleFindIt = (item) => {
        console.log(item)
        navigate(`/course/${item.courseId}/topics/${item.id}`)
    }

    console.log(inputData)
    
    return (
        <>
            <Modal isclose={handleClose} isopen={handleOpen}>
                <div className='modal'>
                    <div>
                        <input type='search' placeholder='Search a Topic......' onChange={handleSearch} value={input} />
                    </div>
                    {inputData && inputData.map((item) => {
                        // console.log(item)
                        return <>
                            <h2 onClick={() => handleFindIt(item)}>{item.title}</h2>
                      </>
                    })}
                </div>
            </Modal>
        </>   
    )
};

export default SearchModal;
