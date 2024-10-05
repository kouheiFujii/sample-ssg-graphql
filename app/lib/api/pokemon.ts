import { GET_POKEMONS } from "../queries/pokemon";
import { fetcher } from "./fetcher";

export const getPokemons = async (
  variables: Variables
): Promise<PokemonsResponse> => {
  return await fetcher<PokemonsResponse>(GET_POKEMONS, variables);
};
