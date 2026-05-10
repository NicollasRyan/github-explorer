import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/common/Loader";
import { ErrorMessage } from "../components/common/ErrorMessage";
import { useRepositoryDetails } from "../hooks/useRepositoryDetails";

export const RepositoryDetails = () => {
  const { username, repoName } = useParams();
  const { repository, loading, error } = useRepositoryDetails(
    username,
    repoName,
  );

  if (loading) {
    return (
      <div className="container py-5">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <ErrorMessage message={error} />
        <Link to="/" className="btn btn-outline-secondary btn-sm mt-3">
          <i className="bi bi-arrow-left me-1" aria-hidden="true" />
          Voltar ao início
        </Link>
      </div>
    );
  }

  if (!repository) {
    return (
      <div className="container py-5">
        <ErrorMessage message="Repositório não encontrado" />
        <Link to="/" className="btn btn-outline-secondary btn-sm mt-3">
          <i className="bi bi-arrow-left me-1" aria-hidden="true" />
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4 py-md-5">
      <Link
        to="/"
        className="btn btn-outline-secondary btn-sm mb-4 shadow-sm"
      >
        <i className="bi bi-arrow-left me-2" aria-hidden="true" />
        Voltar
      </Link>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h1 className="h3 mb-2">{repository.name}</h1>

          <p className="text-body-secondary small mb-3">
            {repository.description || "Sem descrição"}
          </p>

          <span className="badge rounded-pill text-bg-dark mb-4">
            {repository.language || "Linguagem não informada"}
          </span>

          <div className="row g-3 mb-4 small">
            <div className="col-6 col-md-3">
              <i
                className="bi bi-star-fill text-warning me-1"
                aria-hidden="true"
              />
              Estrelas: {repository.stargazers_count}
            </div>

            <div className="col-6 col-md-3">
              <i className="bi bi-diagram-2 me-1" aria-hidden="true" />
              Forks: {repository.forks_count}
            </div>

            <div className="col-6 col-md-3">
              <i className="bi bi-eye me-1" aria-hidden="true" />
              Watchers: {repository.watchers_count}
            </div>

            <div className="col-6 col-md-3">
              <i className="bi bi-exclamation-circle me-1" aria-hidden="true" />
              Issues: {repository.open_issues_count}
            </div>
          </div>

          <div className="mb-4 small text-body-secondary">
            <p className="mb-2">
              <strong className="text-body">Branch:</strong>{" "}
              {repository.default_branch}
            </p>

            <p className="mb-2">
              <strong className="text-body">Criado em:</strong>{" "}
              {new Date(repository.created_at).toLocaleDateString()}
            </p>

            <p className="mb-0">
              <strong className="text-body">Atualizado em:</strong>{" "}
              {new Date(repository.updated_at).toLocaleDateString()}
            </p>
          </div>

          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shadow-sm"
          >
            <i className="bi bi-box-arrow-up-right me-2" aria-hidden="true" />
            Ver no GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
