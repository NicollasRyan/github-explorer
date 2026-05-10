import { SyntheticEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (username: string) => void;
  disabled?: boolean;
}

export const SearchBar = ({ onSearch, disabled = false }: SearchBarProps) => {
  const [username, setUsername] = useState("");

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedUsername = username.trim();

    if (!normalizedUsername) return;

    onSearch(normalizedUsername);
  }

  return (
    <form className="d-flex gap-2 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o usuário do GitHub"
        className="form-control"
        value={username}
        disabled={disabled}
        onChange={(event) => setUsername(event.target.value)}
      />

      <button type="submit" className="btn btn-primary" disabled={disabled}>
        Buscar
      </button>
    </form>
  );
};
