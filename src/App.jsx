import { useState } from 'react'
import './App.css'
import Header from "./layout/header/header.jsx"
import Footer from "./layout/footer/footer.jsx"
import Pokemon from "./components/pokemon/pokemon.jsx"
import PokemonDetalle from "./components/pokemon-detalle/pokemon-detalle.jsx";
import Movimiento from "./components/movimiento/movimiento.jsx";
const LISTA_MOVIMIENTOS = [
  {
    nombre: "Lanzallamas",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "El objetivo es atacado con una intensa ráfaga de fuego. Puede causar quemaduras."
  },
  {
    nombre: "Rayo",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Un potente rayo de electricidad cae sobre el rival. Puede paralizarlo."
  },
  {
    nombre: "Látigo Cepa",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 45,
    precision: 100,
    pp: 25,
    descripcion: "Azota al objetivo con lianas delgadas y resistentes."
  },
  {
    nombre: "Danza Espada",
    tipo: "Normal",
    categoria: "Estado",
    potencia: null,
    precision: null,
    pp: 20,
    descripcion: "Frenética danza que ensalza el espíritu combativo. Aumenta mucho el Ataque del usuario."
  }
];
const LISTA_POKEMON = [
    {
      id: 1,
      nombre: "Bulbasaur",
      tipos: ["Planta", "Veneno"],
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      altura: 0.7,
      peso: 6.9,
      descripcion: "Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon.",
      habilidades: ["Espesura", "Clorofila"],
      estadisticas: [
        { nombre: "PS", valor: 45 },
        { nombre: "Ataque", valor: 49 },
        { nombre: "Defensa", valor: 49 },
        { nombre: "At. Esp.", valor: 65 },
        { nombre: "Def. Esp.", valor: 65 },
        { nombre: "Velocidad", valor: 45 }
      ]
    },
    {
      id: 4,
      nombre: "Charmander",
      tipos: ["Fuego"],
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      altura: 0.6,
      peso: 8.5,
      descripcion: "La llama que arde en la punta de su cola es una muestra de sus emociones.",
      habilidades: ["Mar Llamas", "Poder Solar"],
      estadisticas: [
        { nombre: "PS", valor: 39 },
        { nombre: "Ataque", valor: 52 },
        { nombre: "Defensa", valor: 43 },
        { nombre: "At. Esp.", valor: 60 },
        { nombre: "Def. Esp.", valor: 50 },
        { nombre: "Velocidad", valor: 65 }
      ]
    },
    {
      id: 25,
      nombre: "Pikachu",
      tipos: ["Eléctrico"],
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      altura: 0.4,
      peso: 6.0,
      descripcion: "Cuando se enfada, este Pokémon descarga de golpe la energía que almacena en el interior de sus mofletes.",
      habilidades: ["Electricidad Estática", "Pararrayos"],
      estadisticas: [
        { nombre: "PS", valor: 35 },
        { nombre: "Ataque", valor: 55 },
        { nombre: "Defensa", valor: 40 },
        { nombre: "At. Esp.", valor: 50 },
        { nombre: "Def. Esp.", valor: 50 },
        { nombre: "Velocidad", valor: 90 }
        ]
    }
];

function App() {
  const [pestanaActiva, setPestanaActiva] = useState("pokemon");
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);
  const cambiarPestana = (nuevaPestana) => {
    setPestanaActiva(nuevaPestana);
    setPokemonSeleccionado(null);
  };
  return (
    <>
      <Header 
        pestanaActiva={pestanaActiva} 
        onCambiarPestana={cambiarPestana} 
      />
      <main className="contenedor-principal">
        {pestanaActiva === "pokemon" && (
          pokemonSeleccionado ? (
            <section>
              <button 
                className="btn-volver" 
                onClick={() => setPokemonSeleccionado(null)}
              >
                ⬅ Volver a la lista
              </button>
              <PokemonDetalle 
                id={pokemonSeleccionado.id}
                nombre={pokemonSeleccionado.nombre}
                tipos={pokemonSeleccionado.tipos}
                imagen={pokemonSeleccionado.imagen}
                altura={pokemonSeleccionado.altura}
                peso={pokemonSeleccionado.peso}
                descripcion={pokemonSeleccionado.descripcion}
                habilidades={pokemonSeleccionado.habilidades}
                estadisticas={pokemonSeleccionado.estadisticas}
              />
            </section>
          ) : (
            <section>
              <h2>Selecciona un Pokémon para ver sus detalles</h2>
              <div className="grid-pokemon">
                {LISTA_POKEMON.map((poke) => (
                  <Pokemon 
                    key={poke.id}
                    id={poke.id}
                    nombre={poke.nombre}
                    tipos={poke.tipos}
                    imagen={poke.imagen}
                    onSelect={() => setPokemonSeleccionado(poke)}
                  />
                ))}
              </div>
            </section>
          )
        )}
        {pestanaActiva === "movimientos" && (
          <section>
            <h2>Listado de Movimientos</h2>
            <div className="grid-pokemon">
              {LISTA_MOVIMIENTOS.map((mov, index) => (
                <Movimiento 
                  key={index}
                  nombre={mov.nombre}
                  tipo={mov.tipo}
                  categoria={mov.categoria}
                  potencia={mov.potencia}
                  precision={mov.precision}
                  pp={mov.pp}
                  descripcion={mov.descripcion}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
