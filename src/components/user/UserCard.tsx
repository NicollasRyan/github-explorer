import { GithubUser } from "../../types/github";

interface UserCardProps {
  user: GithubUser;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="card mb-4 p-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-circle"
          width={120}
        />
        <div>
          <h2>{user.login}</h2>
          <p>{user.bio ?? "Sem bio disponível"}</p>
          <p>
            Followers: {user.followers} | Following: {user.following} | Repos:{" "}
            {user.public_repos}
          </p>
        </div>
      </div>
    </div>
  );
};
