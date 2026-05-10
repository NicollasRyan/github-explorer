import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMensage";
import { useRepositoryDetails } from "../hooks/useRepositoryDetails";

export const RepositoryDetails = () => {
  const { username, repoName } = useParams();
  const { repository, loading, error } = useRepositoryDetails(
    username,
    repoName,
  );

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!repository) return <ErrorMessage message="Repositório não encontrado" />;

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-dark mb-4">
        <i className="bi bi-arrow-left me-2" aria-hidden="true" />
        Voltar
      </Link>

      <div className="card shadow-sm p-4">
        <h1 className="mb-2">{repository.name}</h1>

        <p className="text-muted">
          {repository.description || "Sem descrição"}
        </p>

        <span className="badge bg-dark mb-4">
          {repository.language || "Linguagem não informada"}
        </span>

        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <i
              className="bi bi-star-fill text-warning me-1"
              aria-hidden="true"
            />
            Estrelas: {repository.stargazers_count}
          </div>

          <div className="col-md-3">
            <i className="bi bi-diagram-2 me-1" aria-hidden="true" />
            Forks: {repository.forks_count}
          </div>

          <div className="col-md-3">
            <i className="bi bi-eye me-1" aria-hidden="true" />
            Watchers: {repository.watchers_count}
          </div>

          <div className="col-md-3">
            <i className="bi bi-exclamation-circle me-1" aria-hidden="true" />
            Issues: {repository.open_issues_count}
          </div>
        </div>

        <div className="mb-4">
          <p>
            <strong>Branch:</strong>{" "}
            {repository.default_branch}
          </p>

          <p>
            <strong>Criado em:</strong>{" "}
            {new Date(repository.created_at).toLocaleDateString()}
          </p>

          <p>
            <strong>Atualizado em:</strong>{" "}
            {new Date(repository.updated_at).toLocaleDateString()}
          </p>
        </div>

        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          <i className="bi bi-box-arrow-up-right me-2" aria-hidden="true" />
          Ver no GitHub
        </a>
      </div>
    </div>
  );
};
