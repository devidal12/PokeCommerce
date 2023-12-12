import axios, {AxiosResponse} from "axios"


export default async function fetchPokemonItems() {
    for (let i = 1; i <= 10; i++) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/item/${i}`);
        console.log(`Información del ítem ${i}:`, response.data);
      } catch (error) {
        console.error(`Error al obtener información del ítem ${i}:`);
      }
    }
  }
  
  fetchPokemonItems();