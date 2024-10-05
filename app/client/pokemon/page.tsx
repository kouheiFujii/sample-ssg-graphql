import PokemonList from "../../lib/components/pokemon/PokemonList";

export default async function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Pokémons List
        </h1>

        <PokemonList />
      </div>
    </div>
  );
}
