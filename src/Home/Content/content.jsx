
import { Link } from 'react-router-dom'
import Button from '../../Common-Components copy/Button/button'
import ImageCom from '../../Common-Components copy/Image/img'
import './content.css'
import logo2 from '../../../public/logoImage/logo2.png'
import { BsLightningCharge } from "react-icons/bs";

export default function ContentCom() {
    return (
        <>
            <div className="content">
                <div className="content-items">
                    <BsLightningCharge className='content-icon'/>
                    <h1>Codeccharya</h1>
                    <div className='content-p-div'><p>Elevate your skills with HTML, CSS, JavaScript, and React !</p></div>
                    <Button classNameButton={"learnButton"}>
                        <Link to={"/course"}>Learn</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}  