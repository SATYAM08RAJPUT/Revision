import { useEffect, useState } from 'react';
import Header from '../../Home/Header/header';
import { useNavigate, useParams } from 'react-router-dom';
import './allRoadMap.css';

const AllRoadMapData = () => {
  const { courseId, topicId } = useParams();
  const [roadmapData, setRoadmapData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchRoadmapData = async () => {
    const response = await fetch(`/api/allRoadmaps/${courseId}`);
    const result = await response.json();
    setRoadmapData(result.allRoadmaps[0].data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRoadmapData();
  }, [courseId]);

  const filterData = roadmapData.filter((item) => item.id == courseId);
  console.log(filterData);

  const handleCssPageClick = (road) => {
    console.log(road);
    // navigate(`/course/${courseId}/allRoadmaps/${courseId}/topics/${topicId}`);
    navigate(`/course/${road.courseId}/topics/${road.id}`);
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

  const handleAllRoadMapBack = () => {
    navigate('/course');
  };

  return (
    <div className="allRoadData-main-container">
      <Header />
      <div className="allRoadMap-btn-div">
        <h1>Road Map</h1>
        <button onClick={handleAllRoadMapBack}>Back</button>
      </div>
      <div className="cssPage-main-container">
        {filterData &&
          filterData.map((item) => (
            <div key={item.id} className="cssPage-items-div">
              <h3>{item.title}</h3>
              <ul>
                {item.topics &&
                  item.topics.map((road) => (
                    <li key={road.id} onClick={() => handleCssPageClick(road)}>
                      {road.title}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllRoadMapData;
