
import { Link } from 'react-router-dom'
import Button from '../../Common-Components copy/Button/button'
import ImageCom from '../../Common-Components copy/Image/img'
import './content.css'
import logo from '../../../public/logoImage/logo.jpg'
export default function ContentCom() {
    return (
        <>
            <div className="content">
                <div className="content-items">
                    <ImageCom src={logo} />
                    <h1>Codeccharya</h1>
                    <p>Elevate your web development skills with HTML, CSS, JavaScript, and React!</p>
                    <Button>
<<<<<<< HEAD
                        <Link to={"/courses"}>Learn</Link>
=======
                        <Link to={"/course"}>Learn</Link>
>>>>>>> c42f6c2a2ce6de781ba14a815315458f925d52e4
                    </Button>
                </div>
            </div>
        </>
    )
}  