import { useMemo, useState } from "react";
import { Pagination } from "../components/common/Pagination";
import { SearchBar } from "../components/user/SearchBar";
import { useGithubUser } from "../hooks/useGithubUser";
import { UserCard } from "../components/user/UserCard";
import { useRepositories } from "../hooks/useRepositories";
import { Loader } from "../components/common/Loader";
import { ErrorMessage } from "../components/common/ErrorMessage";
import { EmptyState } from "../components/common/EmptyState";
import { RepoList } from "../components/repository/RepoList";
import { SortSelector } from "../components/repository/SortSelector";
import { SortOrder } from "../types/sort";

export function Home() {
  const [username, setUsername] = useState("");
  const [order, setOrder] = useState<SortOrder>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const {
    user,
    loading: userLoading,
    error: userError,
  } = useGithubUser(username);

  const repoFetchLogin =
    username.trim().length > 0 &&
    !userLoading &&
    user !== null &&
    !userError
      ? user.login
      : "";

  const {
    repositories,
    loading: repositoriesLoading,
    error: repositoriesError,
  } = useRepositories(repoFetchLogin);

  const sortedRepositories = useMemo(() => {
    return [...repositories].sort((a, b) =>
      order === "desc"
        ? b.stargazers_count - a.stargazers_count
        : a.stargazers_count - b.stargazers_count,
    );
  }, [repositories, order]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRepositories = sortedRepositories.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  function handleSearch(nextUsername: string) {
    setUsername(nextUsername);
    setCurrentPage(1);
  }

  function handleOrderChange(nextOrder: SortOrder) {
    setOrder(nextOrder);
    setCurrentPage(1);
  }

  const hasSearched = username.trim().length > 0;
  const searchInFlight = userLoading || repositoriesLoading;
  const hasRepositories = sortedRepositories.length > 0;
  const shouldShowInitialState = !hasSearched && !userLoading;
  const shouldShowUserContent = Boolean(user) && !userError;
  const shouldShowRepositories =
    !repositoriesLoading && hasRepositories && !repositoriesError;
  const shouldShowEmptyRepositories =
    Boolean(user) &&
    !repositoriesLoading &&
    !hasRepositories &&
    !repositoriesError;

  return (
    <div className="container py-5">
      <SearchBar onSearch={handleSearch} disabled={searchInFlight} />

      {shouldShowInitialState && (
        <EmptyState message="Busque um usuário do GitHub para ver seus repositórios." />
      )}

      {hasSearched && userLoading && <Loader />}

      {userError && <ErrorMessage message={userError} />}

      {shouldShowUserContent && user && (
        <>
          <UserCard user={user} />

          <SortSelector order={order} onOrderChange={handleOrderChange} />

          {repositoriesLoading && !repositoriesError && <Loader />}

          {repositoriesError && <ErrorMessage message={repositoriesError} />}

          {shouldShowRepositories && (
            <>
              <RepoList
                repositories={paginatedRepositories}
                username={user.login}
              />
              <Pagination
                currentPage={currentPage}
                totalItems={sortedRepositories.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}

          {shouldShowEmptyRepositories && (
            <EmptyState message="Nenhum repositório encontrado." />
          )}
        </>
      )}
    </div>
  );
}
