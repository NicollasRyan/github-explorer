interface Props {
  message: string
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="alert alert-danger">
      {message}
    </div>
  )
}

export default ErrorMessage