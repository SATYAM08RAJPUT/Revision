import './modal.css';
export default function Modal({isopen,isclose,children}){
    if(!isopen) return null
    return(
        <>
        <div className="modal-overlay">
            <div className="modal-content">
            <button onClick={isclose} className='closeBtn'>Close</button>
            {children}
            </div>
        </div>
        </>
    )
}
