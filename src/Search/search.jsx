import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Modal/modal.css';
import { CiSearch } from 'react-icons/ci';
import useArrowPress from '../CustomHook/useArrowPress';

const Search = ({ handleCloseModal }) => {
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
  const { activeIndex } = useArrowPress(searchedData, handleFilterDataTopic);

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalHeader">
          <div className="searchWrapper">
            <CiSearch className="searchIcon" />
            <input
              type="search"
              value={input}
              onChange={handleInput}
              placeholder="Search docs"
            />
          </div>
          <button onClick={handleCloseModal}>Close</button>
        </div>
        <ul>
          {searchedData.map((topic, index) => (
            <li
              key={topic.id}
              onClick={() => handleFilterDataTopic(topic)}
              style={{
                backgroundColor:
                  index === activeIndex ? 'hsl(24.6 95% 53.1%)' : '',
              }}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
