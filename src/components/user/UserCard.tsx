import { GithubUser } from "../../types/github";

interface UserCardProps {
  user: GithubUser;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="card shadow-sm border-0 mb-4 overflow-hidden">
      <div className="card-body p-3 p-sm-4">
        <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
          <img
            src={user.avatar_url}
            alt={`Avatar de ${user.login}`}
            className="rounded-circle border border-light shadow-sm"
            width={120}
            height={120}
          />
          <div className="text-center text-sm-start flex-grow-1">
            <h2 className="h4 mb-2">{user.login}</h2>
            <p className="text-body-secondary small mb-3">
              {user.bio ?? "Sem bio disponível"}
            </p>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-sm-start small">
              <span className="badge rounded-pill text-bg-light border">
                <i className="bi bi-people me-1" aria-hidden="true" />
                {user.followers} seguidores
              </span>
              <span className="badge rounded-pill text-bg-light border">
                <i className="bi bi-person-plus me-1" aria-hidden="true" />
                {user.following} seguindo
              </span>
              <span className="badge rounded-pill text-bg-light border">
                <i className="bi bi-folder2 me-1" aria-hidden="true" />
                {user.public_repos} públicos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
