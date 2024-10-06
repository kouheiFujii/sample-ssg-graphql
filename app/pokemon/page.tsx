import { getPokemons } from "../lib/api/pokemon";

export default async function Page() {
  const gqlVariables = {
    limit: 10,
    offset: 0,
  };
  const result = await getPokemons(gqlVariables);
  const {
    pokemons: { count, message, results },
  } = result;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Pokémons List
        </h1>

        <div>
          <div className="text-center mb-8">
            <p className="text-gray-700">
              Showing <span className="font-bold">{results.length}</span> of{" "}
              <span className="font-bold">{count}</span> Pokémons
            </p>
            {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((pokemon) => (
              <div
                key={pokemon.name}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {pokemon.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
