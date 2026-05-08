import { useEffect, useState } from "react";
import { getRepositories } from "../services/github.service";
import { Repository } from "../types/github";

export const useRepositories = (username: string, order: "desc" | "asc") => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username.trim()) {
      setRepositories([]);
      setError("");
      return;
    }

    const fetchRepos = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getRepositories(username);

        const sorted = [...data].sort((a, b) =>
          order === "desc"
            ? b.stargazers_count - a.stargazers_count
            : a.stargazers_count - b.stargazers_count,
        );

        setRepositories(sorted);
      } catch (err) {
        setRepositories([]);
        setError("Error fetching repositories");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, order]);

  return { repositories, loading, error };
};
