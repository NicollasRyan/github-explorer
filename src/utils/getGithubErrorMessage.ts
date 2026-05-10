import axios from "axios";

interface GithubErrorMessages {
  notFound: string;
  forbidden?: string;
  fallback?: string;
}

export function getGithubErrorMessage(
  error: unknown,
  messages: GithubErrorMessages,
) {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      return messages.notFound;
    }

    if (error.response?.status === 403) {
      return (
        messages.forbidden ??
        "Limite de requisições da API do GitHub atingido. Tente novamente mais tarde."
      );
    }

    if (!error.response) {
      return "Não foi possível conectar à API do GitHub.";
    }
  }

  return messages.fallback ?? "Não foi possível carregar os dados.";
}
