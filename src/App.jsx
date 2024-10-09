import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/mainHome/mainhome';
import CourseList from './MultiSectionViewer/multiSectionViewer'
import AllDataFile from './AllFile/TopicList';
import Search from './Search/search';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseList />} />
          <Route path="/course/:courseId" element={<AllDataFile />} />
          <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile />} />
          <Route path="/search" element={<Search />} />
          <Route path='/topics/:id' element = {<AllDataFile />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App