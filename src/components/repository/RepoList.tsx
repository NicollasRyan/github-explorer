import { Repository } from "../../types/github";
import { RepoCard } from "./RepoCard";

interface RepoListProps {
  repositories: Repository[];
  username: string;
}

export const RepoList = ({ repositories, username }: RepoListProps) => {
  return (
    <>
      {repositories.map((repo) => (
        <RepoCard key={repo.id} repo={repo} username={username} />
      ))}
    </>
  );
};
