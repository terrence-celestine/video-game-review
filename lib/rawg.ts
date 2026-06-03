export async function fetchGames() {
    const url = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=9`;
    
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