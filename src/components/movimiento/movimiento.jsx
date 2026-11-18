import "./movimiento.css"

export default function Movimiento({
    nombre,
    tipo,
    categoria,
    potencia,
    precision,
    pp,
    descripcion
}){
    return(
        <>
            <div className="movimiento-card">
                <div className="movimiento-header">
                    <h3 className="movimiento-nombre">{nombre}</h3>
                    {tipo && (
                    <span className={`badge-tipo tipo-${tipo.toLowerCase()}`}>
                        {tipo}
                    </span>
                    )}
                </div>
                <div className="movimiento-categoria">
                    <span className={`badge-categoria categoria-${categoria?.toLowerCase()}`}>
                    {categoria}
                    </span>
                </div>
                <div className="movimiento-stats">
                    <div className="stat-caja">
                        <span className="stat-caja-label">Potencia</span>
                        <span className="stat-caja-valor">{potencia ?? "-"}</span>
                    </div>
                    <div className="stat-caja">
                        <span className="stat-caja-label">Precisión</span>
                        <span className="stat-caja-valor">{precision ? `${precision}%` : "-"}</span>
                    </div>
                    <div className="stat-caja">
                        <span className="stat-caja-label">PP</span>
                        <span className="stat-caja-valor">{pp ?? "-"}</span>
                    </div>
                </div>
                {descripcion && (
                    <p className="movimiento-descripcion">
                    {descripcion}
                    </p>
                )}
            </div>
        </>
    )
}