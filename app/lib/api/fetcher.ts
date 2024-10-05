export const fetcher = async <T>(query: string, variables = {}): Promise<T> => {
  const response = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const json = await response.json();

  return json.data as T;
};
