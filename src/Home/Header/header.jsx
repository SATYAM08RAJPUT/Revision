import Input from '../../Common-Components/Input/input';
import './header.css';
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { GoMoon } from "react-icons/go";
import ImageCom from '../../Common-Components copy/Image/img';
import logo from '../../../public/logoImage/logo.jpg'
import { Link } from 'react-router-dom';

export default function Header({setSearch,serach}) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    
    return (
        <div className='header'>
            <div className='left-sideheader'>
                <Link to={'/home'}> <ImageCom src={logo} /></Link>
               
            </div>
            <div className='middle-sideheader'>
                <div className='middle-items'>
                    <IoSearchOutline className='serachicon' />
                    <Input placeholder={"Searching..."} type={"text"} value={serach} onchange={setSearch}/>
                </div>
            </div>
            <div className='right-sideheader'>
                <div><Link to={'/multiSectionViewer'}>Learn to Code</Link></div>
                <div onClick={toggleTheme} className={`theme ${theme}`}>{theme === 'light' ? '☀️' : '🌙'}</div>
            </div>
        </div>
    );
}



