// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Home from './Home/mainHome/mainhome';
// import CourseList from './MultiSectionViewer/multiSectionViewer'
// import AllDataFile from './AllFile/TopicList';
// import Search from './Search/search';
// import './App.css'
// import CssPageFile from './AllPagesRender/CssPage/cssPage';


// function App() {
//   return (
//     <>
//       <div className='app'>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/course" element={<CourseList />} />
//             <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile />} />
//             <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile />} /> 
//             <Route path="/search" element={<Search />} />
//             {/* <Route path="/cssPage" element={<CssPageFile />} /> */}
//           </Routes>
//         </Router>
//       </div>
//     </>
//   )

// }
// export default App


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home/mainHome/mainhome';
import CourseList from './MultiSectionViewer/multiSectionViewer'
import AllDataFile from './AllFile/TopicList';
import Search from './Search/search';
import './App.css'
import AllRoadMapData from './AllPagesRender/AllRoadMap/allRoadMap';



function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<CourseList />} />
            <Route path="/course/:courseId/allRoadmaps/:courseId" element={<AllRoadMapData />} />
            <Route path="/course/:courseId/topics/:topicId" element={<AllDataFile />} />
          </Routes>
        </Router>
      </div>
    </>
  )

}
export default App


{/* <Route path="/search" element={<Search />} /> */}