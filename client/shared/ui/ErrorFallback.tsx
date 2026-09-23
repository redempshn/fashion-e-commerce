const ErrorFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div role="alert">
        <p className="text-base">Something went wrong</p>
      </div>
    </div>
  );
};

export default ErrorFallback;
