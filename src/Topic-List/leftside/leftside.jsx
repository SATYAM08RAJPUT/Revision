import './leftside.css';

const LeftSideBar = ({ handleTopicClick, filteredTopic }) => {
  return (
    <div className="leftList-Conatiner">
      {filteredTopic.map((topic, index) => {
        return (
          <div
            key={index}
            onClick={() => handleTopicClick(index + 1)}
            className="sidebar"
          >
            {topic.name}
          </div>
        );
      })}
    </div>
  );
};

export default LeftSideBar;
