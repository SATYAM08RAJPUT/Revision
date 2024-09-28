<<<<<<< HEAD
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header'
import CssQuestions from './cssQuestions/CssQuestions'

function App() {

  const [cssQuestionsData,setCssQuestionsData] = useState([]);
  const [searchText,SetSearchText] = useState("");
  console.log(searchText)

  useEffect(() =>{
    getCssQuestions();
  },[])

  const getCssQuestions = () =>{
    fetch("/api/codeccharya")
    .then(res => res.json())
    .then(data => setCssQuestionsData(data.cssFiles))
  }

  return (
    <>
    <div className='app'>
      <Header />
      <CssQuestions data = {cssQuestionsData} searchText = {searchText} SetSearchText = {SetSearchText} />

    </div>

=======
import './App.css'
function App() {


  return (
    <>
     
>>>>>>> 8a3287dbca5a76ac75713a2d053adc92e2310f3e
    </>
  )
}

export default App
