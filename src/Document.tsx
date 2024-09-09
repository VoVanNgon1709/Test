import { useState } from "react"
const Document = () => {
    const [count, setCount ] = useState(1) 
    const handleClickme = () => { 
        setCount(count+1)
    }   
    console.log(count)
    return (
        <div>
            <button onClick={handleClickme}>Click me</button> 
            {count }
        </div>
    )
}
export default Document