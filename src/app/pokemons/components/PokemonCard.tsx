import Link from "next/link";
import Image from "next/image"
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60" id={id}>
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center justify-center">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt="imagen"
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capilize">{name}</p>
          {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
          <div className="mt-5">
            <Link href={`/dashboard/pokemon/${id}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Saber Más
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href=""
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-green-600">
              <IoHeartOutline/>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Campaigns
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
         
        </div>

        
      </div>
    </div>
  );
};

export default PokemonCard;
