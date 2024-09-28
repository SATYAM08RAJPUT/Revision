
import { Link } from 'react-router-dom'
import Button from '../../Common-Components copy/Button/button'
import ImageCom from '../../Common-Components copy/Image/img'
import './content.css'
export default function ContentCom() {
    return (
        <>
            <div className="content">
                <div className="content-items">
                    {/* <ImageCom src={"https://avatars.githubusercontent.com/u/1905708?s=200&v=4"} /> */}
                    <ImageCom src={'src/Home/WhatsApp Image 2024-09-28 at 12.13.46_49ebca41.jpg'} />
                    <h1>Codeccharya</h1>
                    <p>Elevate your web development skills with HTML, CSS, JavaScript, and React!</p>
                    <Button>
                        <Link to={"/multiSectionViewer"}>Learn</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}