const API_URL = "https://rickandmortyapi.com/api/character";

const itemsService = {
  async getAll(query = "") {
    const res = await fetch(`${API_URL}/?name=${query}`);
    const data = await res.json();
    return data.results || [];
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
  },
};

export default itemsService;
