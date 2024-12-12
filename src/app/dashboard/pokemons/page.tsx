import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response"
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon"
import Image from "next/image"

//ese tipado me permite acceder a las propiedades de la interfaz en la respuesta
//mediante el .    , bastante util
const getPokemons = async(limit=20,offset=0):Promise<SimplePokemon[]> => {

    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name
    }) )

    return pokemons
}


//Esto es un componente asincrono
export default async function Page() {

    const pokemons =await getPokemons(50)

    return (
        <div className="flex flex-col">

             <span className="text-5xl ">Listado de pokemons <small>estático</small></span>

              <div className="flex flex-wrap gap-10 items-center justify-center">
                  {pokemons.map((pokemon)=>{
                    return   <Image 
                    key={pokemon.id}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width={100}
                    height={100}
                    alt="imagen"
                    />
                  })}
              </div>
            {JSON.stringify(pokemons)}
        </div>
    )
}
