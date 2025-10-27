import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
      <div className="text-center p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-100 mb-8">
          Explore our features and get started by logging into your account.
        </p>

        <Link
          to="/login"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
