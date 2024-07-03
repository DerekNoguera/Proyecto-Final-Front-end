import { useEffect, useState } from "react";
import getHonda from "../../../../services/Carros/Honda/getHonda";

function HondaComponente() {
    const [items, setCarros] = useState([]);
    useEffect(() => {
        datos();
    }, []);
    const datos = async () => {
        const datosHonda = await getHonda();
        setCarros(datosHonda);
    };
    return (
        <div>
            <div className="divsCarros">
                {items.map((item) => (
                    <div className="divContenido" key={item.id}>
                        <div>
                            <img className="imgCarros" src={item.Url} alt="" />
                        </div>
                        <div className="divDescription">
                            <div className="div2Carros">
                                <h6 className="marca">{item.marca}</h6>
                                <p className="precio"> {"$" + item.precio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HondaComponente;
