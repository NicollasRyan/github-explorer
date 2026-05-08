import { useEffect, useState } from "react";
import { getUser } from "../services/github.service";

export const useGithubUser = (username: string) => {
  const [user, setUser] = useState(null);
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
        setError("User not found");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  return { user, loading, error };
};
