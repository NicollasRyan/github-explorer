interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div
      className="text-center rounded-3 border bg-body shadow-sm py-5 px-4 my-2"
      role="status"
    >
      <i
        className="bi bi-github display-6 text-body-secondary d-block mb-3"
        aria-hidden="true"
      />
      <p className="text-muted mb-0 small">{message}</p>
    </div>
  );
}
