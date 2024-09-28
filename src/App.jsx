import { useEffect, useState } from 'react'
import './App.css'
import CssQuestions from './cssQuestions/CssQuestions'
import Home from './Home/mainHome/mainhome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MultiSectionViewer from './MultiSectionViewer/multiSectionViewer'
function App() {

  return (
    <>
    <div className='app'>
    <Router> 
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/multiSectionViewer" element={<MultiSectionViewer />} />
        {/* <Route path='/cssQuestion' element={<CssQuestions data = {cssQuestionsData} searchText = {searchText} SetSearchText = {SetSearchText} />} /> */}
      </Routes>
    </Router>
      
    </div>
    </>
  )
}

export default App
