import { Navigate, Outlet } from 'react-router-dom';
import { ReactNode, Suspense } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useRecruiter } from '@/context/RecruiterContext';
import { useAuth } from "@/context/AuthContext";

const RecruiterNavbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    type RecruiterContextType = {
        isRecruiterLoggedIn: boolean;
        login: () => void;
        logout: () => void;
    };

    const handleLogout = () => {
        logout();
        navigate('/auth');
    };

    return (
        <nav className="border-b">
            <div className="flex items-center justify-between px-4 py-3">
                <Link to="/recruiter/dashboard" className="text-xl font-bold">
                    ConnectVerse Recruiter
                </Link>
                <div className="flex items-center gap-4">
                    <Link to="/recruiter/post-job">
                        <Button variant="outline">Post Job</Button>
                    </Link>
                    <Link to="/recruiter/applications">
                        <Button variant="outline">Applications</Button>
                    </Link>
                    <Link to="/recruiter/profile">
                        <Button variant="outline">Company Profile</Button>
                    </Link>
                    <Button variant="destructive" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export { RecruiterNavbar };
interface RecruiterRouteProps {
    children: ReactNode;
  }
const RecruiterRoute = ({ children }: RecruiterRouteProps) => {
    const { isAuthenticated, isLoading, isRecruiter } = useAuth();
  
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <p className="text-xl text-gray-600">Loading...</p>
          </div>
        </div>
      );
    }
  
    if (!isAuthenticated) {
      return <Navigate to="/auth" />;
    }
  
    // Make sure isRecruiter is a function and is called properly
    if (typeof isRecruiter === 'function' && !isRecruiter()) {
      return <Navigate to="/dashboard" />;
    }
  
    // Wrap children in error boundary
    return (
      <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
        {children}
      </Suspense>
    );
  };
  
  export default RecruiterRoute;
