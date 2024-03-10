import "./curso1.css"

const Curso1=()=>{
    let op=0
    return(
        <>
        <div className="holi">
            <input type='radio' value={1} name="y" onChange={()=>{
                op=1
            }}>hshshhsshshhssh</input>
            <input type='radio' value={2} name="y" onChange={()=>{
                op=2
            }}>hshshhsshshhssh</input>
            <input type='radio' value={3} name="y" onChange={()=>{
                op=3
            }}>hshshhsshshhssh</input>
            <input type='radio' value={4} name="y" onChange={()=>{
                op=4
            }}>hshshhsshshhssh</input>
            (()={
                op==1||op==2?<h1>Correcto</h1>
                :<h1>Incorrecto</h1>
            })
        </div>
        </>
    )
}

export default Curso1;