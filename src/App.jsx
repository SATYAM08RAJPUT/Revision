import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home/mainHome/mainhome';
import CourseList from './MultiSectionViewer/multiSectionViewer'
import AllDataFile from './AllFile/TopicList';

function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/course" element={<CourseList />} />
            <Route path="/course/:courseId" element={<AllDataFile />} />
            <Route path="/course/:courseId/topics/:title" element={<AllDataFile />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}
export default App