
import { Link } from 'react-router-dom'
import Button from '../../Common-Components copy/Button/button'
import ImageCom from '../../Common-Components copy/Image/img'
import './content.css'
import logo2 from '../../../public/logoImage/logo2.png'
export default function ContentCom() {
    return (
        <>
            <div className="content">
                <div className="content-items">
                    {/* <ImageCom src={"https://avatars.githubusercontent.com/u/1905708?s=200&v=4"} /> */}
                    <ImageCom src={logo2} />
                    {/* <img src="https://code.google.com/images/developers.png" alt="" /> */}
                    <h1>Codeccharya</h1>
                    <p>Elevate your web development skills with HTML, CSS, JavaScript, and React!</p>
                    <Button>
                        <Link to={"/course"}>Learn</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}  