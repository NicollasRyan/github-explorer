import { FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (username: string) => void;
  disabled?: boolean;
}

export const SearchBar = ({ onSearch, disabled = false }: SearchBarProps) => {
  const [username, setUsername] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedUsername = username.trim();

    if (!normalizedUsername) return;

    onSearch(normalizedUsername);
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <label htmlFor="github-username" className="form-label small text-muted mb-1">
        Usuário do GitHub
      </label>
      <div className="input-group shadow-sm">
        <input
          id="github-username"
          type="text"
          className="form-control"
          autoComplete="off"
          value={username}
          disabled={disabled}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button type="submit" className="btn btn-primary px-4" disabled={disabled}>
          <i className="bi bi-search me-1 d-none d-sm-inline" aria-hidden="true" />
          Buscar
        </button>
      </div>
    </form>
  );
};
