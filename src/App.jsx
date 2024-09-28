<<<<<<< HEAD
import { useEffect, useState } from 'react'
import './App.css'
import CssQuestions from './cssQuestions/CssQuestions'
import Home from './Home/mainHome/mainhome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MultiSectionViewer from './MultiSectionViewer/multiSectionViewer'
=======
import './App.css'
import CssQuestions from './cssQuestions/CssQuestions'
import MultiSectionViewer from './MultiSectionViewer/multiSectionViewer'

>>>>>>> 3e869df129892670edd1570a6090254ce0a2474d
function App() {

  return (
    <>
<<<<<<< HEAD
    <div className='app'>
    <Router> 
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/multiSectionViewer" element={<MultiSectionViewer />} />
        <Route path='/cssQuestion' element={<CssQuestions data = {cssQuestionsData} searchText = {searchText} SetSearchText = {SetSearchText} />} />
      </Routes>
    </Router>
      
    </div>
=======
      <MultiSectionViewer />
      {/* <CssQuestions /> */}
>>>>>>> 3e869df129892670edd1570a6090254ce0a2474d
    </>
  )
}

export default App
