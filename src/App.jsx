import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home/mainHome/mainhome';
import CourseList from './MultiSectionViewer/multiSectionViewer'
import AllDataFile from './AllFile/TopicList';
import Search from './Search/search';
import './App.css'
import CssRoadMap from './Css-Roadmap/cssRoadMap';
import HtmlRoadMap from './HTML-ROADMAP/htmlroadmap';
import JavaScriptRoadMap from './JAVASCRIPT-ROADMAP/javascriptroadmap';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<CourseList />} />
            <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile />} />
            <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile />} /> 
            <Route path="/search" element={<Search />} />
            <Route path="/course/cssRoadMap" element={<CssRoadMap />} />
            <Route path='/course/HTMLRoadMap' element={<HtmlRoadMap />}/>
            <Route path='/course/JavaScriptRoadMap' element={<JavaScriptRoadMap />}/>
            <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile />} /> 
          </Routes>
        </Router>
      </div>
    </>
  )

}
export default App
