import "./landing_1.css"
import { imagen,moneda } from "../utils";
const Landing_1=()=>{
    return(
        <>
        <div className="primerParte">
            <div className="texto">
                <h1>Blondi</h1>
                <h3>somos pafa los que quieren aprender las cryptos la buena </h3>
                <button>Conoce más pa</button>
            </div>
            <div className="imagen">
            <img src={moneda} className="img2"/>
            <img src={imagen} alt="nonas"/>
            </div>
        </div>
        </>
    )
}

export default Landing_1;