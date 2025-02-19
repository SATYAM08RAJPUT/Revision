import { useEffect, useState } from 'react';
import './htmlroadmap.css';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Home/Header/header';
import React from 'react';

export default function HtmlRoadMap() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [htmlRoadMap, setHtmlRoadMap] = useState([]);
  const { courseId } = useParams();
  console.log(courseId);

  const fetchCssRoad = async () => {
    const response = await fetch('/api/roadmaps');
    const result = await response.json();
    setHtmlRoadMap(result.roadmaps);
    setLoading(false);
  };
  useEffect(() => {
    fetchCssRoad();
  }, []);
  console.log(htmlRoadMap);

  const handleTopicClick = (item) => {
    navigate(`/course/${item.courseId}/RoadMap/${item.id}`);
    // navigate(`/course/${item.courseId}/topics/${item.id}`);
  };

  const handleSubTitle = (event, subitem) => {
    event.stopPropagation();
    navigate(`/course/${subitem.courseId}/topics/${subitem.id}`);
  };

  const handleBack = () => {
    navigate(`/course`);
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
          fontSize: '30px',
        }}
      >
        <i className="fa fa-spinner fa-spin" style={{ fontSize: '74px' }}></i>
      </div>
    );
  }

  const selectedRoadmap = htmlRoadMap.filter((item) => item.id == courseId);
  console.log(selectedRoadmap);
  return (
    <>
      <div>
        <Header />
        <div className="back-button-div">
          <div>
            <br />
            <h1 style={{ color: 'hsl(24.6, 95%, 53.1%)', fontSize: '50px' }}>
              Road Map: {selectedRoadmap[0].roadMapTitle}
            </h1>
          </div>
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
        </div>

        <div className="cssRoaaMap">
          {selectedRoadmap[0].roadMap.map((item) => (
            <div
              key={item.topicName}
              className="cssBox-Conatiner"
              onClick={() => handleTopicClick(item)}
            >
              <h2>{item.topicName}</h2>
              <ul className="order-listRoadMap">
                {item.subTopics.map((subitem) => (
                  <li
                    key={subitem.subtitle}
                    onClick={(event) => handleSubTitle(event, subitem)}
                  >
                    {subitem.subtitle}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
