import { Link } from "react-router-dom";
import { Repository } from "../../types/github";

interface RepoCardProps {
  repo: Repository;
  username: string;
}

export const RepoCard = ({ repo, username }: RepoCardProps) => {
  const detailsPath = `/users/${encodeURIComponent(
    username,
  )}/repos/${encodeURIComponent(repo.name)}`;

  return (
    <div className="card shadow-sm border-0 mb-3">
      <div className="card-body p-3 p-md-4">
        <h3 className="h5 mb-2">
          <Link
            to={detailsPath}
            className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            {repo.name}
          </Link>
        </h3>

        <p className="text-body-secondary small mb-3">
          {repo.description ?? "Sem descrição"}
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div className="d-flex flex-wrap gap-3 small text-muted">
            <span>
              <i
                className="bi bi-star-fill text-warning me-1"
                aria-hidden="true"
              />
              {repo.stargazers_count}
            </span>
            <span>
              <i className="bi bi-code-slash me-1" aria-hidden="true" />
              {repo.language ?? "—"}
            </span>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
              aria-label={`Abrir o repositório ${repo.name} no GitHub em nova aba`}
            >
              <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true" />
              GitHub
            </a>

            <Link
              to={detailsPath}
              className="btn btn-primary btn-sm"
              aria-label={`Ver página de detalhes do repositório ${repo.name}`}
            >
              Detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
