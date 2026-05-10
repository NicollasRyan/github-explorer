import { useEffect, useState } from "react";
import { getUser } from "../services/github.service";
import { GithubUser } from "../types/github";
import { getGithubErrorMessage } from "../utils/getGithubErrorMessage";

export const useGithubUser = (username: string) => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username.trim()) {
      setUser(null);
      setError("");
      setLoading(false);
      return;
    }

    let isActive = true;

    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
        const userData = await getUser(username);

        if (isActive) {
          setUser(userData);
        }
      } catch (error) {
        if (isActive) {
          setUser(null);
          setError(
            getGithubErrorMessage(error, {
              notFound: "Usuário não encontrado",
              fallback: "Erro ao buscar usuário",
            }),
          );
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    return () => {
      isActive = false;
    };
  }, [username]);

  return { user, loading, error };
};
