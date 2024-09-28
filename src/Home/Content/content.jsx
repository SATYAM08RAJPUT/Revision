
import { Link } from 'react-router-dom'
import Button from '../../Common-Components copy/Button/button'
import ImageCom from '../../Common-Components copy/Image/img'
import './content.css'
export default function ContentCom() {
    return (
        <>
            <div className="content">
                <div className="content-items">
                    <ImageCom src={"https://avatars.githubusercontent.com/u/1905708?s=200&v=4"} />
                    <h1>Codeachrya</h1>
                    <p>Create an app that empowers users to manage their time and resource more Effectively</p>
                    <Button>
                        <Link to={"/multiSectionViewer"}>Learn</Link>
                    </Button>
                    <Button>
                        <Link to={"/questions"}>question</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}