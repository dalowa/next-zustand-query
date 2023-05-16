"use client";

import Card from "@/components/Card";
import { useFetchRepos } from "@/hooks/useRepos";
import { useFavoriteReposStore } from "@/store/favoriteRepos";

export default function Home() {
  const { data, isLoading } = useFetchRepos();
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>L O A D I N G . . .</div>;

  return (
    <main>
      {data?.map((repository) => (
        <Card
          key={repository.id}
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
        ></Card>
      ))}
    </main>
  );
}
