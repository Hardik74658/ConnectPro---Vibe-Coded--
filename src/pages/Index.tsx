
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for auth to be determined
    if (!isLoading) {
      // Redirect to dashboard if authenticated, otherwise to login
      if (isAuthenticated) {
        navigate("/dashboard");
      } else {
        navigate("/auth");
      }
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-connectpro-primary mb-4">ConnectPro</h1>
        <div className="animate-pulse my-8">
          <div className="h-4 w-32 bg-gray-200 rounded mx-auto"></div>
        </div>
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Index;
