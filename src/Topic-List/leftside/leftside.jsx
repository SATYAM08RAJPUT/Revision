<<<<<<< HEAD

=======
import Header from '../../Home/Header/header';
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
import './leftside.css'

const LeftSideBar = ({ handleTopicClick, filteredTopic }) => {
    return (
<<<<<<< HEAD
        <div className='leftList-Conatiner'>
            {filteredTopic.map((topic, index) => {
                return <div key={index} onClick={() => handleTopicClick(index + 1)} className="sidebar">{topic.name}</div>

            })}
        </div>
=======
        <>
           
            <div className='leftList-Conatiner'>
            <Header />
                {leftSideData.map((item) => {
                    console.log(item)
                    return item.sideBarData.map((item, index) => {
                        console.log("djbgdog", item)
                        return <div onClick={() => onHandleIndex(index)} className="sidebar">{item.title}</div>
                    })
                })}
            </div>
        </>
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
    )
}

// export default LeftSideBar;