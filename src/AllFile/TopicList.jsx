import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TopicList.css';
import Header from '../Home/Header/header';
import { IoMdArrowRoundBack } from 'react-icons/io';
import React, { useRef } from 'react';

const AllDataFile = () => {
  const { courseId, topicId } = useParams();
  const [topicsData, setTopicsData] = useState([]);
  const [expandedTopicId, setExpandedTopicId] = useState(null);
  const [selectContent, setSelectedContent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [roadmap, setRoadMap] = useState([]);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const navigate = useNavigate();
  const subContainersRef = useRef([]);

  const fetchAllTopics = async () => {
    const response = await fetch(`/api/topics`);
    const result = await response.json();
    console.log(result.topics[0]);
    setTopicsData(result.topics);
    setLoading(false);
    const course = result.topics.find((topic) => topic.id == courseId);
    if (course) {
      const initialTopicKey = Object.keys(course)[0];
      setSelectedContent(course[initialTopicKey][parseInt(topicId) - 1 || 0]);
    }
  };

  useEffect(() => {
    fetchAllTopics();
  }, [courseId, topicId]);

  const filterData = roadmap.filter((item) => item.id == courseId);
  console.log(filterData);

  const fetchRoadMap = async () => {
    const response = await fetch('/api/roadmaps');
    const result = await response.json();
    console.log('Roadmap Result', result);
    setRoadMap(result.roadmaps);
    console.log(result.roadmaps);
    const course = result.roadmaps.find((topic) => topic.id == id);
    console.log(course);
  };

  useEffect(() => {
    fetchRoadMap();
  }, [courseId]);
  console.log(roadmap);

  const handleTopicLi = (itm) => {
    setSelectedTopicId(itm.id);
    navigate(`/course/${courseId}/topics/${itm.id}`);
  };

  const handleBackClick = () => {
    navigate(`/course/${courseId}/RoadMap`);
  };

  const handleToggle = (topicId) => {
    console.log('Toggle;----------', topicId);
    setExpandedTopicId((prevId) => (prevId === topicId.id ? null : topicId.id));
    navigate(`/course/${topicId.courseId}/RoadMap/${topicId.id}`);
  };

  const handleScroll = (index) => {
    subContainersRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleSubTitle = (event, itm, index) => {
    console.log(itm);
    event.stopPropagation();
    navigate(`/course/${courseId}/topics/${itm.id}`);
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

  console.log('SelecContent:-------------', selectContent);

  return (
    <div className="allData-main-container">
      <Header topicData={filterData} />
      <div className="allData-cont-div1">
        {filterData.map((item, index) => {
          const topicKey = Object.keys(item)[0];

          const topicData = item[topicKey];

          return (
            <div key={index}>
              <div className="all-Data-BackBtn">
                <IoMdArrowRoundBack onClick={handleBackClick} />
              </div>
              <ul className="leftside-ul">
                {topicData.map((topic, index) => {
                  const isSelected = topic.id === topicId;
                  console.log('isSelected=====', isSelected);
                  return (
                    <div
                      key={topic.id}
                      onClick={() => {
                        handleTopicLi(topic);
                        handleToggle(topic);
                        handleScroll(index);
                      }}
                      ref={(el) => (subContainersRef.current[index] = el)}
                      className="sub-container"
                    >
                      <h2
                        onClick={(event) => handleToggle(topic)}
                        className={isSelected ? 'selectedTopic' : ''}
                      >
                        {topic.topicName}
                      </h2>
                      <span
                        className="arrowUp"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleToggle(topic);
                        }}
                      ></span>
                      {
                        <ul>
                          {topic.subTopics &&
                            topic.subTopics.map((itm, subIndex) => {
                              const isSubSelected = itm.id === topicId;
                              return (
                                <li
                                  onClick={(event) =>
                                    handleSubTitle(event, itm, subIndex)
                                  }
                                  className={
                                    isSubSelected ? 'selectedSubTopic' : ''
                                  }
                                >
                                  {itm.subtitle}
                                </li>
                              );
                            })}
                        </ul>
                      }
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="allData-cont-div2">
        {selectContent.content && (
          <div>
            <h1 style={{ color: 'hsl(24.6 95% 53.1%)', fontSize: '40px' }}>
              {selectContent.title}
            </h1>

            <h3>{selectContent.Definition}</h3>
            <div>{selectContent.content}</div>
            <h3>{selectContent.ex}</h3>
            <h2>{selectContent.function}</h2>

            <div className="code-example">
              {selectContent && selectContent.info ? (
                <>
                  <ul>
                    <li>
                      <pre>
                        <code>{selectContent.info}</code>
                      </pre>
                    </li>
                  </ul>
                </>
              ) : (
                ''
              )}
              <pre>
                <code>{selectContent.code}</code>
              </pre>

              <h3>{selectContent.ex2}</h3>

              {selectContent && selectContent.code2 ? (
                <pre>
                  <code>{selectContent.code2}</code>
                </pre>
              ) : (
                ''
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDataFile;
