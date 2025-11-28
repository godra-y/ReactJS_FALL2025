const API_URL = "https://rickandmortyapi.com/api/character";

export async function getCharactersByPage(page = 1) {
  const res = await fetch(`${API_URL}/?page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch characters");
  const data = await res.json();
  return data.results;
}

export async function getCharacterById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Character not found");
  return await res.json();
}

export async function searchCharacters(query) {
  const res = await fetch(`${API_URL}/?name=${query}`);
  if (!res.ok) throw new Error("No characters found");
  const data = await res.json();
  return data.results;
}
