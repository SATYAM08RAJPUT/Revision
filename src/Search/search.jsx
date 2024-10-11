// import React, { useEffect, useState } from 'react';
// import ModalJi from "../Modal/modal";
// import { useNavigate, useParams } from 'react-router-dom';
// import '../Modal/modal.css'
// import { IoSearchOutline } from "react-icons/io5";

// const Search = ({ isOpen, onClose }) => {
//     const [input, setInput] = useState('');
//     const [searchedData, setSearchData] = useState([]);
//     const navigate = useNavigate();


//     useEffect(() => {
//         const fetchApi = async () => {
//             if (input) {
//                 try {
//                     const response = await fetch(`/api/topics/search?term=${input}`);
//                     const result = await response.json();
//                     setSearchData(result);
//                 } catch (error) {
//                     console.log(error);
//                     setSearchData([])
//                 }
//             } else {
//                 setSearchData([]);
//             }
//         };

//         const umMountTimeOut = setTimeout(() => {
//             fetchApi();
//         }, 300);

//         return () => {
//             clearTimeout(umMountTimeOut);
//         };
//     }, [input]);

//     const handleInput = (e) => {
//         setInput(e.target.value);
//     };

//     const handleFilterDataTopic = (topic) => {
//         setInput(topic.title);
//         navigate(`/course/${topic.courseId}/topics/${topic.id}`);
//         onClose();
//     };

//     return (
//         <>
//             <ModalJi isOpen={isOpen} onClose={onClose}>
//                 <div className='search-search-div'>
//                     <IoSearchOutline className='searchicon' />
//                     <input type='search' value={input} onChange={handleInput} placeholder='Search docs'/>
//                 </div>
//                 <div className='search-results'>
//                     <ul className='search-content-div'>
//                         {searchedData.map(topic => (
//                             <li key={topic.id} onClick={() => handleFilterDataTopic(topic)}>
//                                 {topic.title}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </ModalJi>
//         </>
//     );
// };

// export default Search;



import React, { useEffect, useState } from 'react';
import ModalJi from "../Modal/modal";
import { useNavigate } from 'react-router-dom';
import '../Modal/modal.css';
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const [searchedData, setSearchData] = useState([]);
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
                    setSearchData([]);
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
        setInput(topic.title);
        navigate(`/course/${topic.courseId}/topics/${topic.id}`);
        onClose();
    };

    return (
        <>
            <ModalJi isOpen={isOpen} onClose={onClose}>
                <div className='search-content-div'>
                    <div className='search-content-inner-div'>
                        <div className='search-close'>
                            <IoSearchOutline className='searchicon' />
                            <input type='search' value={input} onChange={handleInput} placeholder='Search docs' />
                        </div>
                    </div>


                    <div className='search-results'>
                        <ul>
                            {searchedData.map(topic => (
                                <li key={topic.id} onClick={() => handleFilterDataTopic(topic)}>
                                    {topic.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ModalJi>
        </>
    );
};

export default Search;
