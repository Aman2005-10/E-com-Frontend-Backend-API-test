import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-extralight text-gray-900">404</h1>

        <h2 className="mt-4 text-3xl font-light text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500 font-light max-w-md">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-xl font-light hover:bg-gray-900 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;