interface ErrorMessageProps {
  title: string;
  message: string;
}

const ErrorMessage = ({ title, message }: ErrorMessageProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4 max-w-md mx-auto px-4">
        <div className="text-destructive text-4xl">⚠️</div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
