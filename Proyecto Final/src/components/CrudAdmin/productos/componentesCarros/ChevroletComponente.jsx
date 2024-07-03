import { useEffect, useState } from "react";
import getChevrolet from "../../../../services/Carros/Chevrolet/getChevrolet";
function ChevroletComponent() {
    const [items, setCarros] = useState([]);
    useEffect(() => {
        datos();
    }, []);
    const datos = async () => {
        const datosChevrolet = await getChevrolet();
        console.log(datosChevrolet);
        setCarros(datosChevrolet);
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

export default ChevroletComponent;