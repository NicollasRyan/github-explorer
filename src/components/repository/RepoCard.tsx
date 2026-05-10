import { Link } from "react-router-dom";
import { Repository } from "../../types/github";

interface RepoCardProps {
  repo: Repository;
  username: string;
}

export const RepoCard = ({ repo, username }: RepoCardProps) => {
  const detailsPath = `/users/${encodeURIComponent(
    username
  )}/repos/${encodeURIComponent(repo.name)}`;

  return (
    <div className="card p-3 mb-3">
      <h3 className="h5">
        <Link to={detailsPath} className="text-decoration-none">
          {repo.name}
        </Link>
      </h3>
      <p>{repo.description ?? "Sem descrição"}</p>
      <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
        <div className="d-flex gap-3">
          <span>
            <i
              className="bi bi-star-fill text-warning me-1"
              aria-hidden="true"
            />
            {repo.stargazers_count}
          </span>
          <span>{repo.language ?? "Linguagem não informada"}</span>
        </div>

        <div className="d-flex gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir o repositório ${repo.name} no GitHub em nova aba`}
          >
            GitHub
          </a>

          <Link
            to={detailsPath}
            aria-label={`Ver página de detalhes do repositório ${repo.name}`}
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};
