import { Repository } from "@/hooks/types";
import { useFavoriteReposStore } from "@/store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

export default function Card({ repository, isFavorite }: CardProps) {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );

  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }
    addFavoriteRepo(repository.id);
  };

  return (
    <div className="bg-orange-500 text-yellow-100 m-3 p-2">
      <h1>{repository.name}</h1>
      <button
        className="text-black bg-slate-50 py-1 px-3 rounded-md m-1"
        onClick={toggleFavorite}
      >
        {isFavorite ? "dislike" : "like"}
      </button>
    </div>
  );
}
