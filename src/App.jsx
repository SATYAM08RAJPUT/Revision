
import { useEffect, useState } from 'react'
import './App.css'
import CssQuestions from './cssQuestions/CssQuestions'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/mainHome/mainhome';
import MultiSectionViewer from './MultiSectionViewer/multiSectionViewer';

function App() {

  const [cssQuestionsData, setCssQuestionsData] = useState([]);
  const [searchText, SetSearchText] = useState("");
  console.log(searchText)

  useEffect(() => {
    getCssQuestions();
  }, [])

  const getCssQuestions = () => {
    fetch("/api/codeccharya")
      .then(res => res.json())
      .then(data => setCssQuestionsData(data.cssFiles))
  }

  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/multiSectionViewer" element={<MultiSectionViewer />} />
            <Route path='/cssQuestion' element={<CssQuestions data={cssQuestionsData} searchText={searchText} SetSearchText={SetSearchText} />} />
          </Routes>
        </Router>

      </div>
    </>
  )
}
export default App
