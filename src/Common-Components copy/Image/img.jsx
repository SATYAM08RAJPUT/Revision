import './img.css'
export default function ImageCom({src,classNameImage}){
    return(
        <>
        <img src={src} className={classNameImage}/>
        </>
    )
}