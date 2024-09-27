import './button.css'
export default function Button(){
    return(
        <>
        <button onClick={onClick} className={classNameButton}>{children}</button>
        </>
    )
}