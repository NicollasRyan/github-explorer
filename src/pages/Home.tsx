import { useGithubUser } from "../hooks/useGithubUser";

export function Home() {
  const { user, loading, error } = useGithubUser("octocat");

  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}