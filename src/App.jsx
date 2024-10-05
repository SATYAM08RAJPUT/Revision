import './App.css'
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MultiSectionViewer from './MultiSectionViewer/multiSectionViewer'
import TopicList from './Topic-List/Maintopic/maintopic'
import Home from './Home/mainHome/mainhome';
import CssQuestions from './cssQuestions/CssQuestions'

function App() {
  const [cssData, setCssData] = useState([]);
  const [serach, setSearch] = useState('')
  const [indexNumber, setIndexNumber] = useState(0)

  const onHandleIndex = (id) => {
    setIndexNumber(id)
  }

  useEffect(() => {
    handleSearch()
  }, [serach])

  const handleSetSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/codeccharya?q=${serach}`);
      const data = await response.json();
      setCssData(data.cssFiles);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home serach={serach} setSearch={handleSetSearch} />} />
          <Route path="/courses" element={<MultiSectionViewer />} />
          <Route path="/courses/:courseId/topicList" element={<TopicList />} />
          <Route path="/courses/:courseId/topicList/:topicId" element={<CssQuestions />} />
          {/* <Route path="/topicList/:courseid" element={<TopicList cssData={cssData} onHandleIndex={onHandleIndex} indexNumber={indexNumber} />} /> */}
        </Routes>
      </Router>
    </div>
=======
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopicList from './Topic-List/Maintopic/maintopic'
import Home from './Home/mainHome/mainhome';
import CourseList from './MultiSectionViewer/multiSectionViewer'
// import TopicLists from './AllFile/TopicList';
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
            <Route path="/course" element={<AllDataFile />} />
          </Routes>
        </Router>
      </div>
    </>
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
  )
}
export default App;