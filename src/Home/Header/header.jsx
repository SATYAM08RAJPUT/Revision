import './header.css';
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { GoMoon } from "react-icons/go";
import ImageCom from '../../Common-Components copy/Image/img';
// import logo2 from '../../../public/logoImage/logo2.png';
import logo2 from '../../../public/logoImage/logo2.png'
import { Link, useNavigate } from 'react-router-dom';
import Search from '../../Search/search';
import { BsLightningCharge } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export default function Header() {
    const [theme, setTheme] = useState('light');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

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

    const handleInput = () => {
        setIsModalVisible(true); 
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };
    
    // const handleSearchSelect = (topic) =>{
    //     console.log('header Wala Data' , topic);
    //     navigate(`/course/${topic.courseId}/topics/${topic.id}`);
    // }

    return (
        <div className='header'>
            <FaBars className='bar'/>
            <div className='left-sideheader'>
                <Link to={'/'}><BsLightningCharge className='header-icon'/></Link>
            </div>
            <div className='middle-sideheader'>
                <div className='middle-items' onClick={handleInput} >
                    <IoSearchOutline className='searchicon' />
                    <p>Search</p>
                </div>
            </div>
            
            <div className='right-sideheader'>
                <div className='learntocode'><Link to={'/course'}>Learn to Code</Link></div>
                <div onClick={toggleTheme} className={`theme ${theme}`}>
                    {theme === 'light' ? '☀️' : '🌙'}
                </div>
            </div>

            <Search isOpen={isModalVisible} onClose={closeModal} />
        </div>
    );
}



