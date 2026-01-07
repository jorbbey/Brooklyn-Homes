import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-slate-100 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-[120px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Page not found
        </h2>

        <p className="mt-3 text-slate-400 max-w-md mx-auto">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
          >
            Go home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:bg-slate-800"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound
