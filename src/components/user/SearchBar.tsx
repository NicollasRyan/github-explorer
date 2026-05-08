import { FormEvent, useState } from "react";


interface SearchBarProps {
  onSearch: (username: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [username, setUsername] = useState("");

function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedUsername = username.trim();

    if (!normalizedUsername) return;

    onSearch(normalizedUsername);
  }

  return (
    <form className="d-flex gap-2 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="form-control"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};
