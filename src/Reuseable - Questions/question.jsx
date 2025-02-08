import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header/header';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AllQuestionFiles = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const { id } = useParams();
  console.log(id);
  const [allQuestionData, setAllQuestionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/courseLists');
      console.log(response);
      const result = await response.json();
      console.log(result);
      setAllQuestionData(result[id]);
    };
    fetchData();
  }, [id]);

  console.log(allQuestionData);

  const handleCss = (id) => {
    navigate(`/Course/${id}/topic`);
  };

  return (
    <>
      <Header />
      <div className="sidebar-main-container">
        <div className="sidebar-right-div1">
          <h1 className="right1">Hiii !</h1>
          <h1>
            Your <strong>Frontend Cheatsheet</strong> Awaits!
          </h1>
          <p>We bring designs to life with code and creativity!</p>
        </div>
        <div className="cheatsheet-main-container">
          {allQuestionData.map((cheatsheet) =>
            cheatsheet.chatsheets.map((itm) => (
              <div key={itm.id}>
                <div className="center">
                  <div className="image-circle">
                    <img src={itm.url} alt={itm.title} />
                  </div>
                  <h2>{itm.title}</h2>
                  <p>{itm.subtitle}</p>
                  <Button variant="contained" onClick={() => handleCss(itm.id)}>
                    {itm.btn}
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AllQuestionFiles;
