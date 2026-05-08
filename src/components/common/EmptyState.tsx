interface Props {
  message: string
}

export const EmptyState = ({ message }: Props) => {
  return (
    <div className="text-center text-muted mt-5">
      {message}
    </div>
  )
}