import { useEffect } from "react";
import { useNavigate } from "react-router";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // main page
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      
      {/* Logo */}
      <img
        src="../../src/assets/জামিয়া_ইসলামিয়া_মোমেনশাহীর_লোগো.jpeg"
        alt="Project Logo"
        className="w-24 mb-6 animate-pulse"
      />

      {/* Project Name */}
      <h1 className="text-3xl font-bold mb-2">
        My Awesome Project
      </h1>

      {/* Info */}
      <p className="text-gray-400 mb-6">
        Loading, please wait...
      </p>

      {/* Spinner (DaisyUI) */}
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loading;
