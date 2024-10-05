"use client";

import { usePokemon } from "../../hooks/usePokemon";
import Image from "next/image";

const PokemonList = () => {
  const {
    pokemonData,
    count,
    next,
    previous,
    loading,
    handleNext,
    handlePrevious,
  } = usePokemon();

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-gray-700">
          Showing <span className="font-bold">{pokemonData.length}</span> of{" "}
          <span className="font-bold">{count}</span> Pokémons
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonData.map((pokemon) => (
          <div
            key={pokemon.name}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {pokemon.name}
            </h2>
            <a
              href={pokemon.url}
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={!previous}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={!next}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
