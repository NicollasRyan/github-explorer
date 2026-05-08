import { api } from "./api";

export const getUser = async (username: string) => {
  const { data } = await api.get(`/users/${username}`);
  return data;
};
