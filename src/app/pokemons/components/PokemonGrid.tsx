import { SimplePokemon } from "../interfaces/simple-pokemon"
import PokemonCard from "./PokemonCard"

interface Props {
    pokemons: SimplePokemon[]
}

const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {pokemons.map((pokemon)=>{
    //   return   <Image 
    //   key={pokemon.id}
    //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
    //   width={100}
    //   height={100}
    //   alt="imagen"
    //   />
    return <PokemonCard pokemon={pokemon}/>
    // <span id={pokemon.id}>{pokemon.name}</span>
    })}
</div>
  )
}

export default PokemonGrid
