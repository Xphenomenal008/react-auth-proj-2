import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500 animate-pulse">404</h1>
        <h2 className="text-2xl mt-4 font-semibold">
          Oops! The page you're looking for doesn't exist.
        </h2>
        <p className="mt-2 text-gray-400">
          It seems you've ventured off the map. Let's get you back on track.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-32 h-32 text-gray-600 animate-bounce"
        >
          <path d="M12 2a10 10 0 00-7.62 16.19l-1.74 4.34a1 1 0 001.3 1.3l4.34-1.74A10 10 0 1012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-12h2v5h-2zm0 6h2v2h-2z" />
        </svg>
      </div>
    </div>
  );
}

export default NotFound;
