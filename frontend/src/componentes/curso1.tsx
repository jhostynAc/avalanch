import "./curso1.css"
import { useState} from "react";

const Curso1=()=>{
    const [op, SetOp] = useState(0);
    return(
        <>
        <div className="holi">
            <input type='radio' value={1} name="y" onChange={()=>{
                SetOp(1)
            }}/>
            <input type='radio' value={2} name="y" onChange={()=>{
                SetOp(2)
            }}/>
            <input type='radio' value={3} name="y" onChange={()=>{
                SetOp(3)
            }}/>
            <input type='radio' value={4} name="y" onChange={()=>{
                SetOp(4)
            }}/>
            {op==1||op==2?<h1>Correcto</h1>
            :<h1>Incorrecto</h1>}
        </div>
        </>
    )
}

export default Curso1;