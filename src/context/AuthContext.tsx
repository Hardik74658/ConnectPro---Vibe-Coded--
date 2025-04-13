import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

type User = {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  role: string;
  skills: string[];
  location: string;
  connections: number;
  joined: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const dummyUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  role: 'Senior Software Engineer',
  skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
  location: 'San Francisco, CA',
  connections: 500,
  joined: '2023'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(dummyUser); // Set dummy user for testing
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
      
      // For demo, authorize any email/password with demo@example.com / password
      if (email === "demo@example.com" && password === "password") {
        const userData: User = {
          id: "user1",
          name: "Demo User",
          email: "demo@example.com",
          profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
          role: 'Senior Software Engineer',
          skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
          location: 'San Francisco, CA',
          connections: 500,
          joined: '2023'
        };
        
        setUser(userData);
        localStorage.setItem("connectpro_user", JSON.stringify(userData));
        toast({
          title: "Login successful",
          description: "Welcome back to ConnectPro!",
        });
      } else {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Try demo@example.com / password",
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

  const signup = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData: User = {
        id: "user" + Date.now(),
        name,
        email,
        profilePicture: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
        role: 'Senior Software Engineer',
        skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
        location: 'San Francisco, CA',
        connections: 500,
        joined: '2023'
      };
      
      setUser(userData);
      localStorage.setItem("connectpro_user", JSON.stringify(userData));
      toast({
        title: "Account created",
        description: "Welcome to ConnectPro! Your account has been created successfully.",
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

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout
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
