import type { Game } from "@/const/interface"

export const GameGrid = ({games} : {games: Game[]}) => {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {games.map((game: Game) => (
        <div 
          key={game.id} 
          className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
        >
          <div className="h-40 bg-gray-200"  style={{ backgroundImage: `url(${game.background_image})`, backgroundSize: "cover" }} />
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-900">{game.name}</h2>
              <span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full">
                {game.rating}
              </span>
            </div>
            <a 
              href={`/game/${game.id}`} 
              className="mt-4 block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
       </div>
    )
}