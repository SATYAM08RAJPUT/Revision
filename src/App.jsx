import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MultiSectionViewer from './MultiSectionViewer/multiSectionViewer'
import TopicList from './Topic-List/Maintopic/maintopic'
import Home from './Home/mainHome/mainhome';
import AllQuestionFiles from './Reuseable - Questions/question'
import QuestioList from './Reuseable - Questions/questionList'

function App() {
  const [cssData, setCssData] = useState([]);
  const [serach,setSearch] = useState('')


  const onHandleIndex =(id) => {
      setIndexNumber(id)
  }

  useEffect(() => {
    getCssQuestions();
  }, [])

  const getCssQuestions = () => {
    fetch("/api/codeccharya")
      .then(res => res.json())
      .then(data => setCssData(data.cssFiles))
  }

  const handleSetSearch = (e) => {
      setSearch(e.target.value)
  }

  const filterData = cssData.map((item) => {
      console.log(item)
      return item.cssDataFile.map((itm) => {
          return itm.content.filter((ite) => {
            return ite.heading.toLowerCase().includes(serach.toLowerCase())
          })
      })  
  })
  console.log(filterData)
  console.log(serach)
  

  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="*" element={<Home serach={serach} setSearch={handleSetSearch} />} />
            {/* <Route path="/home" element={<Home serach={serach} setSearch={handleSetSearch} />} /> */}
            {/* <Route path="/multiSectionViewer" element={<MultiSectionViewer />} /> */}
            {/* <Route path="/topicList" element={<TopicList cssData={cssData} filterData={filterData} onHandleIndex={onHandleIndex} indexNumber={indexNumber}/>} /> */}
            <Route path='/Course/:id' element={<AllQuestionFiles />}/>
            <Route path='/Course/:id/topic/'  element={<QuestioList />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}
export default App
