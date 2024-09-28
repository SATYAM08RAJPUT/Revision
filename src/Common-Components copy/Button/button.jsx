import './button.css'
export default function Button({onClick,classNameButton,children}){
    return(
        <>
        <button onClick={onClick} className={classNameButton}>{children}</button>
        </>
    )
}