import { useEffect, useState } from "react";
import { getRepositoryDetails } from "../services/github.service";
import { Repository } from "../types/github";
import { getGithubErrorMessage } from "../utils/getGithubErrorMessage";

export const useRepositoryDetails = (username?: string, repoName?: string) => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username || !repoName) {
      setRepository(null);
      setError("Repositório não encontrado");
      setLoading(false);
      return;
    }

    let isActive = true;

    const fetchRepository = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getRepositoryDetails(username, repoName);

        if (isActive) {
          setRepository(data);
        }
      } catch (error) {
        if (isActive) {
          setRepository(null);
          setError(
            getGithubErrorMessage(error, {
              notFound: "Repositório não encontrado",
              fallback: "Erro ao carregar repositório",
            }),
          );
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchRepository();

    return () => {
      isActive = false;
    };
  }, [username, repoName]);

  return { repository, loading, error };
};
