
import { useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MultiSectionViewer from './MultiSectionViewer/multiSectionViewer'
import TopicList from './Topic-List/Maintopic/maintopic'
import Home from './Home/mainHome/mainhome';
import { useNavigate } from 'react-router-dom'


function App() {
  const [cssData, setCssData] = useState([]);
  // const navigate = useNavigate()
  
  useEffect(() => {
    getCssQuestions();
  }, [])

  const getCssQuestions = () => {
    fetch("/api/codeccharya")
      .then(res => res.json())
      .then(data => setCssData(data.cssFiles))
  }


  function onHandleCss(id){
    if(id ===0){
      alert("Helo")
    } else if(id===1){
      navigate('/topicList')
    }
}


  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/multiSectionViewer" element={<MultiSectionViewer  onHandleCss ={onHandleCss} />} />
            <Route path="/topicList" element={<TopicList cssData={cssData}/>} />
          </Routes>
        </Router>

      </div>
    </>
  )
}
export default App
