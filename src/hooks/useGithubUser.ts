import { useEffect, useState } from "react";
import { getUser } from "../services/github.service";
import { GithubUser } from "../types/github";

export const useGithubUser = (username: string) => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
        const userData = await getUser(username);
        setUser(userData);
      } catch (err) {
        setUser(null);
        setError("User not found");
      } finally {
        setLoading(false);
      }
    };

    if (!username.trim()) {
      setUser(null);
      setError("");
      return;
    }

    fetchUser();
  }, [username]);

  return { user, loading, error };
};
