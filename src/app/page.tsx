const fetchPokemonDescList = ({ page }: { page: number }) =>
  fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=${20}`
  ).then((response) => response.json());

type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

type Pokemon = {
  id: number;
  name: string;
  height: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};

export default async function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center bg-slate-200 p-4 sticky top-0 border-b border-slate-300">
        <div className="text-2xl font-bold">Pokémon!</div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-sm cursor-pointer active:bg-blue-700 font-semibold text-sm">
            Get more
          </button>
          <button className="bg-green-600 text-white px-3 py-1.5 rounded-sm cursor-pointer active:bg-green-700 font-semibold text-sm">
            Change grouping
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-4">Pokémon go here...</div>
    </div>
  );
}
