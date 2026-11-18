import "./pokemon.css"

export default function Pokemon({id, nombre, tipos = [], imagen, onSelect}){
    
    const numeroFormateado = `#${String(id).padStart(3, "0")}`;

    return(
        <>
            <div className="pokemon-card" onClick={onSelect} style={{cursor: "pointer"}}>
                <span className="pokemon-Numero">{numeroFormateado}</span>
                
                {imagen && (
                    <img 
                        src={imagen} 
                        alt={`Imagen de ${nombre}`} 
                        className="pokemon-imagen"
                    />
                )}
                
                <h3 className="pokemon-nombre">{nombre}</h3>
                
                <div className="pokemon-tipos">
                    {tipos.map((tipo, index) =>(
                        <span key={index} className={`badge-tipo tipo-${tipo.toLowerCase()}`}>
                            {tipo}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}