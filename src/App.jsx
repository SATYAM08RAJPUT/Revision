import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home/mainHome/mainhome';
import CourseList from './MultiSectionViewer/multiSectionViewer'
import AllDataFile from './AllFile/TopicList';
import Search from './Search/search';

function App() {
  // const courseId = useParams()
  // console.log(courseId)
  // const navigate =useNavigate()

  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<CourseList />} />
            <Route path="/course/:courseId" element={<AllDataFile />} />
            <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </div>
    </>
  )

}
export default App


// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home/mainHome/mainhome';
// import CourseList from './MultiSectionViewer/multiSectionViewer';
// import AllDataFile from './AllFile/TopicList';
// import Search from './Search/search';
// import { useState } from 'react';

// function App() {
//   const [selectContent , setSelectedContent] = useState([]); 

//   return (
//     <div className='app'>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home  setSelectedContent={setSelectedContent} />} />
//           <Route path="/course" element={<CourseList />} />
//           <Route path="/course/:courseId" element={<AllDataFile setSelectedContent={setSelectedContent} selectContent={selectContent} />} />
//           <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile setSelectedContent={setSelectedContent} selectContent={selectContent} />} />
//           <Route path="/search" element={<Search setSelectedContent={setSelectedContent} selectContent={selectContent} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
