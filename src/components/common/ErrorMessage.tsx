interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      className="alert alert-danger d-flex align-items-start gap-2 shadow-sm mb-4"
      role="alert"
    >
      <i className="bi bi-exclamation-triangle-fill flex-shrink-0 mt-1" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
