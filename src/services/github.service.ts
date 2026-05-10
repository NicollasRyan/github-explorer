import { api } from "./api";
import { GithubUser, Repository } from "../types/github";

export const getUser = async (username: string): Promise<GithubUser> => {
  const { data } = await api.get<GithubUser>(
    `/users/${encodeURIComponent(username)}`,
  );

  return data;
};

export const getRepositories = async (
  username: string,
): Promise<Repository[]> => {
  const { data } = await api.get<Repository[]>(
    `/users/${encodeURIComponent(username)}/repos?per_page=100`,
  );

  return data;
};

export const getRepositoryDetails = async (
  username: string,
  repo: string,
): Promise<Repository> => {
  const { data } = await api.get<Repository>(
    `/repos/${encodeURIComponent(username)}/${encodeURIComponent(repo)}`,
  );

  return data;
};
