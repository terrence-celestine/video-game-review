// Define the structure of a game item
interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

export async function fetchGames() {
    const url = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`;
    
    const response = await fetch(url, { next: { revalidate: 3600 } });
  
    // Check if the response failed
    if (!response.ok) {
      // Log the status so you can see it in your terminal
      console.error(`RAWG API Error: ${response.status} - ${response.statusText}`);
      
      // Optional: Log the actual error body from the API
      const errorBody = await response.text();
      console.error("API Response Body:", errorBody);
  
      throw new Error(`Failed to fetch games: ${response.status}`);
    }
    
    return response.json();
  }

  export async function fetchGameDetails(id: string) {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`);
    return response.json();
  }

  export async function fetchGenres() {
    const response = await fetch(
      `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch genres");
    return response.json();
  }

  export async function fetchGenreDescription(id: number) {
    const response = await fetch(
      `https://api.rawg.io/api/genres/${id}?key=${process.env.RAWG_API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch genres");
    return response.json();
  }

export async function fetchGamesByGenre(genreSlug: string): Promise<Game[]> {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&genres=${genreSlug}`
  );
  
  if (!response.ok) throw new Error("Failed to fetch games for this genre");
  
  const data = await response.json();
  return data.results;
}

export async function fetchGamesByName(name: string): Promise<Game[]> {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${name}`
  );
  
  if (!response.ok) throw new Error("Failed to fetch games for this genre");
  
  const data = await response.json();
  return data.results;
}