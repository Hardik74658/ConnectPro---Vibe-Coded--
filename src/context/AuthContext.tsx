import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export type UserRole = "user" | "recruiter";

export type User = {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  role: UserRole;
  company?: string; // Optional for recruiters
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role: UserRole, company?: string) => Promise<void>;
  logout: () => void;
  isRecruiter: () => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check for stored user on initial load
    const storedUser = localStorage.getItem("connectpro_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("connectpro_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, we'll have two test accounts: a regular user and a recruiter
      if (email === "demo@example.com" && password === "password") {
        const userData: User = {
          id: "user1",
          name: "Demo User",
          email: "demo@example.com",
          profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
          role: "user"
        };
        
        setUser(userData);
        localStorage.setItem("connectpro_user", JSON.stringify(userData));
        toast({
          title: "Login successful",
          description: "Welcome back to ConnectPro!",
        });
      } else if (email === "recruiter@example.com" && password === "password") {
        const userData: User = {
          id: "recruiter1",
          name: "Demo Recruiter",
          email: "recruiter@example.com",
          profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
          role: "recruiter",
          company: "TechHire Solutions"
        };
        
        setUser(userData);
        localStorage.setItem("connectpro_user", JSON.stringify(userData));
        toast({
          title: "Recruiter login successful",
          description: "Welcome back to ConnectPro Recruiting!",
        });
      } else {
        toast({
          title: "Login failed",
          description: "Try demo@example.com or recruiter@example.com with password: password",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string, role: UserRole, company?: string) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData: User = {
        id: "user" + Date.now(),
        name,
        email,
        profilePicture: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
        role,
        ...(company && { company })
      };
      
      setUser(userData);
      localStorage.setItem("connectpro_user", JSON.stringify(userData));
      toast({
        title: "Account created",
        description: `Welcome to ConnectPro${role === 'recruiter' ? ' Recruiting' : ''}! Your account has been created successfully.`,
      });
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Signup error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("connectpro_user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
  };

  const isRecruiter = () => {
    return user?.role === "recruiter";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        isRecruiter
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};