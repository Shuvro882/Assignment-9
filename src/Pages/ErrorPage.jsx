import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-error">404</h1>
        <h2 className="text-2xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        <Link to="/" className="btn btn-primary mt-6">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
