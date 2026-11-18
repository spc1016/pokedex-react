import "./pokemon-detalle.css"

export default function PokemonDetalle({
    id,
    nombre,
    tipos = [],
    imagen,
    altura,
    peso,
    habilidades = [],
    estadisticas = [],
    descripcion
}){
    const numeroFormateado = `#${String(id).padStart(3, "0")}`;
    return(
        <>
            <div className="pokemon-detalle-card">
                <header className="detalle-header">
                    <span className="detalle-numero">{numeroFormateado}</span>
                    <h2 className="detalle-nombre">{nombre}</h2>
                    
                    <div className="detalle-tipos">
                        {tipos.map((tipo, index) => (
                            <span key={index} className={`badge-tipo tipo-${tipo.toLowerCase()}`}>
                            {tipo}
                            </span>
                        ))}
                    </div>
                </header>
                <div className="detalle-cuerpo">
                    <div>
                        {imagen && (
                            <img 
                                src={imagen} 
                                alt={`Imagen detallada de ${nombre}`} 
                                className="detalle-imagen" 
                            />
                        )}
                    </div>
                    {descripcion && <p className="detalle-descripcion">"{descripcion}"</p>}
                
                    <div className="detalle-info">
                        <div className="detalle-medidas">
                            <div className="medida-item">
                                <span className="medida-label">Altura</span>
                                <span className="medida-valor">{altura} m</span>
                            </div>
                            <div className="medida-item">
                                <span className="medida-label">Peso</span>
                                <span className="medida-valor">{peso} kg</span>
                            </div>
                        </div>
                    </div>
                    <div className="detalle-seccion">
                        <h4>Habilidades</h4>
                        <ul className="lista-habilidades">
                        {habilidades.map((habilidad, index) => (
                            <li key={index} className="habilidad-item">
                            {habilidad}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="detalle-seccion">
                        <h4>Estadísticas Base</h4>
                        <div className="stats-contenedor">
                            {estadisticas.map((stat, index) => (
                                <div key={index} className="stat-fila">
                                <span className="stat-nombre">{stat.nombre}</span>
                                <span className="stat-valor">{stat.valor}</span>
                                {/* Barra de progreso de la estadística */}
                                <div className="stat-barra-fondo">
                                    <div 
                                    className="stat-barra-relleno" 
                                    style={{ width: `${Math.min((stat.valor / 150) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}