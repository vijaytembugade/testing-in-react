const { useState } = require("react")

export const Button = ()=>{
    const [btnText, setBtnText] = useState("hi");
    return <><button onClick={()=> setBtnText('hello')}>{btnText}</button></>
}