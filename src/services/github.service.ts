import { api } from "./api";

export const getUser = async (username: string) => {
  const { data } = await api.get(`/users/${username}`);
  return data;
};

export const getRepositories = async (username: string) => {
  const { data } = await api.get(`/users/${username}/repos?per_page=100`)
  return data
}

export const getRepositoryDetails = async (
  username: string,
  repo: string
) => {
  const { data } = await api.get(`/repos/${username}/${repo}`)
  return data
}
