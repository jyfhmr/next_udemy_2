import PokemonGrid from "@/app/pokemons/components/PokemonGrid"
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response"
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon"
import Image from "next/image"
import { notFound } from "next/navigation"

//ese tipado me permite acceder a las propiedades de la interfaz en la respuesta
//mediante el .    , bastante util
const getPokemons = async(limit=20,offset=0):Promise<SimplePokemon[]> => {

    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name
    }) )

    //throw new Error("error adrede")

    //throw notFound()

    return pokemons
}


//Esto es un componente asincrono
export default async function Page() {

    const pokemons =await getPokemons(50)

    return (
        <div className="flex flex-col">

             <span className="text-5xl ">Listado de pokemons <small>estático</small></span>

            <PokemonGrid pokemons={pokemons}/>
             
            {JSON.stringify(pokemons)}
        </div>
    )
}
