import "./header.css"
import pokedexLogo from "../../assets/pokeball.svg"

export default function Header({ pestanaActiva, onCambiarPestana }){
    return(
        <>
            <header>
                <div 
                    className="titulo-pokedex" 
                    onClick={() => onCambiarPestana("pokemon")} 
                    style={{ cursor: "pointer" }}
                >
                    <img src={pokedexLogo} alt="Logo Pokedex" />
                    <p>Pokedex React</p>
                </div>
                
                <nav>
                    <button 
                    className={`nav-btn ${pestanaActiva === "pokemon" ? "activo" : ""}`}
                    onClick={() => onCambiarPestana("pokemon")}
                    >
                    Pokémon
                    </button>
                    <button 
                    className={`nav-btn ${pestanaActiva === "movimientos" ? "activo" : ""}`}
                    onClick={() => onCambiarPestana("movimientos")}
                    >
                    Movimientos
                    </button>
                </nav>
            </header>
        </>
    )
}