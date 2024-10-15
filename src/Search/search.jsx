// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Modal/modal.css';
// import { IoSearchOutline } from "react-icons/io5";
// import { CiSearch } from "react-icons/ci";

// const Search = ({ handleCloseModal }) => {
//     const [input, setInput] = useState('');
//     const [searchedData, setSearchData] = useState([]);
//     const [activeIndex, setActiveIndex] = useState(0)
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
//                     setSearchData([]);
//                 }
//             } else {
//                 setSearchData([]);
//             }
//         };

//         const umountTimeout = setTimeout(() => {
//             fetchApi();
//         }, 300);

//         return () => {
//             clearTimeout(umountTimeout);
//         };
//     }, [input]);

//     const handleInput = (e) => {
//         setInput(e.target.value);
//     };

//     const handleFilterDataTopic = (topic) => {
//         navigate(`/course/${topic.courseId}/topics/${topic.id}`);
//         handleCloseModal();
//     };

//     console.log(searchedData)

//     const handleKeyDown = (event) => {
//         console.log(event)
//         if (event.key === "ArrowUp") {
//             setActiveIndex((preIndex) => Math.max(preIndex - 1, 0))
//             console.log(activeIndex)
//         } else if (event.key === "ArrowDown") {
//             setActiveIndex((preIndex) => Math.min(preIndex + 1, searchedData.length - 1))
//             console.log(activeIndex)
//         } else if (event.key === "Enter") {
//             handleFilterDataTopic(searchedData[activeIndex])
//         }
//     }

//     useEffect(() => {
//         window.addEventListener('keydown', handleKeyDown)
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown)
//         }
//     }, [activeIndex])

//     return (
//         <div className="modalContainer">
//             <div className="modal">
//                 <div className="modalHeader">
//                     <div className="searchWrapper">
//                         <CiSearch className="searchIcon" />
//                         <input type='search' value={input} onChange={handleInput} placeholder='Search docs' />
//                     </div>
//                     <button onClick={handleCloseModal}>Close</button>
//                 </div>
//                 <ul>
//                     {searchedData.map((topic, index) => (
//                         <li key={topic.id} onClick={() => handleFilterDataTopic(topic)} style={{ backgroundColor: index === activeIndex ? "hsl(24.6 95% 53.1%)" : "" }}>
//                             {topic.title}
//                         </li>
//                     ))}
//                 </ul>
//           </div>
//           </div>
               
//     );
// };

// export default Search;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Modal/modal.css';
import { IoSearchOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Search = ({ handleCloseModal }) => {
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
                    setSearchData([]);
                }
            } else {
                setSearchData([]);
            }
        };

        const umountTimeout = setTimeout(() => {
            fetchApi();
        }, 300);

        return () => {
            clearTimeout(umountTimeout);
        };
    }, [input]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleFilterDataTopic = (topic) => {
        navigate(`/course/${topic.courseId}/topics/${topic.id}`);
        handleCloseModal();
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
        <div className="modalContainer">
            <div className="modal">
                <div className="modalHeader">
                    <div className="searchWrapper">
                        <CiSearch className="searchIcon" />
                        <input type='search' value={input} onChange={handleInput} placeholder='Search docs' />
                    </div>
                    <button onClick={handleCloseModal}>Close</button>
                </div>
                <ul>
                    {searchedData.map((topic, index) => (
                        <li key={topic.id} onClick={() => handleFilterDataTopic(topic)} style={{ backgroundColor: index === activeIndex ? "hsl(24.6 95% 53.1%)" : "" }}>
                            {topic.title}
                        </li>
                    ))}
                </ul>
          </div>
          </div>
               
    );
};

export default Search;

