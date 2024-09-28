
import { useEffect, useState } from 'react'
import './App.css'
import CssQuestions from './cssQuestions/CssQuestions'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/mainHome/mainhome';
import MultiSectionViewer from './MultiSectionViewer/multiSectionViewer';

function App() {

  const [cssData, setCssData] = useState([]);
  const [searchText, SetSearchText] = useState("");


  useEffect(() => {
    getCssQuestions();
  }, [])

  const getCssQuestions = () => {
    fetch("/api/codeccharya")
      .then(res => res.json())
      .then(data => setCssData(data.cssFiles))
  }

  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/multiSectionViewer" element={<MultiSectionViewer />} />
            <Route path='/questions' element={<CssQuestions data={cssData} searchText={searchText} SetSearchText={SetSearchText} />} />
          </Routes>
        </Router>

      </div>
    </>
  )
}
export default App
