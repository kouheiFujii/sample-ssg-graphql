type PokemonResult = {
  url: string;
  name: string;
  image: string;
};

type PokemonsResponse = {
  pokemons: {
    count: number;
    next: string | null;
    previous: string | null;
    status: boolean;
    message: string | null;
    results: PokemonResult[];
  };
};

type Variables = {
  limit: number;
  offset: number;
};
