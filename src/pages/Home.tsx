import { useState } from "react";
import { SearchBar } from "../components/user/SearchBar";
import { useGithubUser } from "../hooks/useGithubUser";
import { UserCard } from "../components/user/UserCard";
import { useRepositories } from "../hooks/useRepositories";
import { Loader } from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMensage";
import { EmptyState } from "../components/common/EmptyState";
import { RepoList } from "../components/repository/RepoList";
import { SortSelector } from "../components/repository/SortSelector";

export function Home() {
  const [username, setUsername] = useState("");
  const [order, setOrder] = useState<"desc" | "asc">("desc");

  const {
    user,
    loading: userLoading,
    error: userError,
  } = useGithubUser(username);

  const {
    repositories,
    loading: repositoriesLoading,
    error: repositoriesError,
  } = useRepositories(username, order);

  const hasSearched = username.trim().length > 0;
  const isLoading = userLoading || repositoriesLoading;
  const hasRepositories = repositories.length > 0;

  return (
    <div className="container py-5">
      <SearchBar onSearch={setUsername} />

      {!hasSearched && (
        <EmptyState message="Busque um usuário do GitHub para ver seus repositórios." />
      )}

      {isLoading && <Loader />}

      {userError && <ErrorMessage message={userError} />}

      {user && (
        <>
          <UserCard user={user} />

          <SortSelector order={order} setOrder={setOrder} />

          {repositoriesError && <ErrorMessage message={repositoriesError} />}

          {!repositoriesLoading && hasRepositories && (
            <RepoList repositories={repositories} username={username} />
          )}

          {!repositoriesLoading && !hasRepositories && !repositoriesError && (
            <EmptyState message="Nenhum repositório encontrado." />
          )}
        </>
      )}
    </div>
  );
}
