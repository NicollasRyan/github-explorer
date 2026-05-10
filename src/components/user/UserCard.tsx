import { GithubUser } from "../../types/github";

interface UserCardProps {
  user: GithubUser;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="card p-3 d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-circle"
          width={120}
        />
        <div className="text-center text-sm-start">
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
