// import './header.css';
// import { IoSearchOutline } from "react-icons/io5";
// import { useState, useEffect } from 'react';
// import { GoMoon } from "react-icons/go";
// import ImageCom from '../../Common-Components copy/Image/img';
// import logo2 from '../../../public/logoImage/logo2.png'
// import { Link, useNavigate } from 'react-router-dom';
// import Search from '../../Search/search';
// import { BsLightningCharge } from "react-icons/bs";
// import { FaBars } from "react-icons/fa";

// export default function Header() {
//     const [theme, setTheme] = useState('light');
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const toggleTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         setTheme(newTheme);
//         sessionStorage.setItem('theme', newTheme);
//     };

//     useEffect(() => {
//         const savedTheme = sessionStorage.getItem('theme');
//         if (savedTheme) {
//             setTheme(savedTheme);
//         }
//     }, []);

//     useEffect(() => {
//         document.body.className = theme;
//     }, [theme]);

//     const handleCloseModal = () =>{
        
//     }

//     return (
//         <div className='header'>
//             <FaBars className='bar'/>
//             <div className='left-sideheader'>
//                 <Link to={'/'}><BsLightningCharge className='header-icon'/></Link>
//             </div>
//             <div className='middle-sideheader'>
//                 <div className='middle-items' onClick={handleInput} >
//                     <IoSearchOutline className='searchicon' />
//                     <p>Search</p>
//                 </div>
//             </div>
            
//             <div className='right-sideheader'>
//                 <Link to={'/course'}>Learn</Link>
//                 <div onClick={toggleTheme} className={`theme ${theme}`}>
//                     {theme === 'light' ? '☀️' : '🌙'}
//                 </div>
//             </div>

//             <Search handleCloseModal={handleCloseModal} />
//         </div>
//     );
// }


// import './header.css';
// import { IoSearchOutline } from "react-icons/io5";
// import { useState, useEffect } from 'react';
// import { GoMoon } from "react-icons/go";
// import { Link } from 'react-router-dom';
// import Search from '../../Search/search';
// import { BsLightningCharge } from "react-icons/bs";
// import { FaBars } from "react-icons/fa";

// export default function Header() {
//     const [theme, setTheme] = useState('light');
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const toggleTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         setTheme(newTheme);
//         sessionStorage.setItem('theme', newTheme);
//     };

//     useEffect(() => {
//         const savedTheme = sessionStorage.getItem('theme');
//         if (savedTheme) {
//             setTheme(savedTheme);
//         }
//     }, []);

//     useEffect(() => {
//         document.body.className = theme;
//     }, [theme]);

//     const handleToggleModal = () => {
//         setIsModalVisible(!isModalVisible);
//     };

//     return (
//         <div className='header'>
//             <FaBars className='bar' />
//             <div className='left-sideheader'>
//                 <Link to={'/'}>
//                     <BsLightningCharge className='header-icon' />
//                 </Link>
//             </div>
//             <div className='middle-sideheader'>
//                 <div className='middle-items' onClick={handleToggleModal}>
//                     <IoSearchOutline className='searchicon' />
//                     <p>Search</p>
//                 </div>
//             </div>
//             <div className='right-sideheader'>
//                 <Link to={'/course'}>Learn</Link>
//                 <div onClick={toggleTheme} className={`theme ${theme}`}>
//                     {theme === 'light' ? '☀️' : '🌙'}
//                 </div>
//             </div>

//             {isModalVisible && <Search handleCloseModal={handleToggleModal} />}
//         </div>
//     );
// }






import './header.css';
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../Search/search';
import { BsLightningCharge } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import { IoIosMenu } from "react-icons/io";


export default function Header({topicData}) {
    const [theme, setTheme] = useState('light');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const isSmallScreen = useMediaQuery({maxWidth:400});

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        sessionStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const savedTheme = sessionStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleToggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleMenuClick = () => {
        console.log(topicData);
    };

    return (
        <div className='header'>
            <IoIosMenu className='bar' onClick={handleMenuClick} />
            <div className='left-sideheader'>
                <Link to={'/'}>
                    <BsLightningCharge className='header-icon' />
                </Link>
            </div>

            <div className='middle-sideheader'>
                {isSmallScreen ? (
                    <IoSearchOutline className='reponsive-search-icon' onClick={handleToggleModal} />
                ): (
                    <div className='middle-items' onClick={handleToggleModal}>
                    <IoSearchOutline className='searchicon' />
                    <p>Search</p>
                </div>
                )}
            </div>

            <div className='right-sideheader'>
                <Link to={'/course'}>Learn</Link>
                <div onClick={toggleTheme} className={`theme ${theme}`}>
                    {theme === 'light' ? '☀️' : '🌙'}
                </div>
            </div>

            {isModalVisible && <Search handleCloseModal={handleToggleModal} />}
        </div>
    );
}





