import Input from '../../Common-Components/Input/input';
import './header.css';
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { GoMoon } from "react-icons/go";
import ImageCom from '../../Common-Components copy/Image/img';

export default function Header() {
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
                {/* <ImageCom src={"https://cdn.dribbble.com/userupload/13564625/file/original-77fefa3e12e2da670cd8c7a7e278a281.png?resize=1504x1128"} /> */}
                <ImageCom src={'src/Home/WhatsApp Image 2024-09-28 at 12.13.46_49ebca41.jpg'}/>
            </div>
            <div className='middle-sideheader'>
                <div className='middle-items'>
                    <IoSearchOutline className='serachicon' />
                    <Input placeholder={"Searching..."} />
                </div> 
            </div>
            <div className='right-sideheader'>
                <div>Learn</div>
                <div onClick={toggleTheme} className={`theme ${theme}`}>{theme === 'light' ? '☀️' : '🌙'}</div>
                <div>Blog</div>
            </div>
        </div>
    );
}
