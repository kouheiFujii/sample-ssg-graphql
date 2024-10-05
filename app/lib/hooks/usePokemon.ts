import { useCallback, useEffect, useState } from "react";
import { getPokemons } from "../api/pokemon";

export const usePokemon = (): {
  pokemonData: PokemonResult[];
  count: number;
  next: string | null;
  previous: string | null;
  loading: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
} => {
  const limit = 10;
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState("0");
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  const [pokemonData, setPokemonData] = useState<PokemonResult[]>([]);
  const [loading, setLoading] = useState(false);

  const getOffset = (url: string | null): string | null => {
    // https://pokeapi.co/api/v2/pokemon?offset=20&limit=10
    if (!url) return null;
    return new URL(url).searchParams.get("offset");
  };

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getPokemons({
        limit,
        offset: Number(offset),
      });
      const {
        pokemons: { next, count, previous, results },
      } = result;
      setPokemonData(results);
      const nextOffset = getOffset(next);
      const previousOffset = getOffset(previous);
      setNext(nextOffset ? nextOffset : null);
      setPrevious(previousOffset ? previousOffset : null);
      setCount(count);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [limit, offset]);

  const handleNext = () => {
    if (!next) return;
    setOffset(next);
    fetchPokemons();
  };

  const handlePrevious = () => {
    if (!previous) return;
    setOffset(previous);
    fetchPokemons();
  };

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return {
    pokemonData,
    count,
    next,
    previous,
    loading,
    handleNext,
    handlePrevious,
  };
};
