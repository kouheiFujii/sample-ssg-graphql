import { getPokemons } from "@/app/lib/api/pokemon";

export async function generateStaticParams() {
  const gqlVariables = {
    limit: 10,
    offset: 0,
  };
  const result = await getPokemons(gqlVariables);
  const {
    pokemons: { results },
  } = result;

  return results.map((pokemon) => ({
    name: pokemon.name,
  }));
}

export default async function Page({
  params,
}: {
  params: {
    name: string;
  };
}) {
  // TODO: pokemon の詳細を取得する api を呼び出す
  // const pokeonDetail = await getPokemonDetail(params.url);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          {params.name}
        </h1>
      </div>
    </div>
  );
}
