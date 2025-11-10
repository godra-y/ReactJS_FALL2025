const API_URL = "https://rickandmortyapi.com/api/character";

export async function getRandomCharacters() {
  const randomPage = Math.floor(Math.random() * 42) + 1;
  const res = await fetch(`${API_URL}?page=${randomPage}`);
  if (!res.ok) throw new Error("Failed to fetch characters");
  const data = await res.json();
  const shuffled = data.results.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

export async function getCharacterById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Character not found");
  return await res.json();
}
