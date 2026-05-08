import { Link } from "react-router-dom";
import { Repository } from "../../types/github";

interface RepoCardProps {
  repo: Repository;
  username: string;
}

export const RepoCard = ({ repo, username }: RepoCardProps) => {
  return (
    <div className="card p-3 mb-3">
      <h3>{repo.name}</h3>
      <p>{repo.description ?? "Sem descrição"}</p>
      <div className="d-flex justify-content-between">
        <span>⭐ {repo.stargazers_count}</span>

        <div className="d-flex gap-3">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <Link to={`/users/${username}/repos/${repo.name}`}>Detalhes</Link>
        </div>
      </div>
    </div>
  );
};
