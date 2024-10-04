import './input.css'
export default function Input({value,type,placeholder,classNameInput,onchange}){
    return(
        <>
        <input value={value} type={type} placeholder={placeholder} className={classNameInput} onChange={onchange}/>
        </>
    )
}