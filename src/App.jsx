import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/mainHome/mainhome';
import CourseList from './MultiSectionViewer/multiSectionViewer';
import AllDataFile from './AllFile/TopicList';
import './App.css';
import HtmlRoadMap from './HTML-ROADMAP/htmlroadmap';

function App() {
  const message = 'Hello, world';

  console.log(message);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseList />} />
          <Route path="/course/:courseId/RoadMap" element={<HtmlRoadMap />} />
          <Route
            path="/course/:courseId/topics/:topicId"
            element={<AllDataFile />}
          />
          <Route
            path="/course/:courseId/RoadMap/:topicId"
            element={<AllDataFile />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
