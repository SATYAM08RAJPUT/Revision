import { useEffect, useState } from "react"

const useArrowPress = (data,onEnter) => {
    const [activeIndex,setActiveIndex] = useState(0)

    const handlekeyDown =(event) => {
        if (event.key === "ArrowUp") {
            setActiveIndex((preIndex) => Math.max(preIndex - 1, 0))
            console.log(activeIndex)
        } else if (event.key === "ArrowDown") {
            setActiveIndex((preIndex) => Math.min(preIndex + 1, data.length - 1))
            console.log(activeIndex)
        } else if (event.key === "Enter") {
            onEnter(data[activeIndex])
        }
    }
    useEffect(() => {
        window.addEventListener('keydown',handlekeyDown)
        return () => {
            window.removeEventListener('keydown',handlekeyDown)
        }
    },[data,activeIndex])

    return {activeIndex}
}   

export default useArrowPress