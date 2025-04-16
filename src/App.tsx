import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { RecruiterProvider } from "@/context/RecruiterContext";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Profiles from "./pages/Profiles";
import ProfileDetail from "./pages/ProfileDetail";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import OwnProfile from "./pages/OwnProfile";
import Messages from "./pages/Messages"; // <-- Add this import

// Footer Pages
import Blog from "./pages/resources/Blog";
import HelpCenter from "./pages/resources/HelpCenter";
import LearningPortal from "./pages/resources/LearningPortal";
import Community from "./pages/resources/Community";
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import TermsOfService from "./pages/company/TermsOfService";

import { RootLayout } from "@/components/layout/RootLayout";
import BlogPost from "./components/blog/BlogPost";

import RecruiterDashboard from '@/pages/recruiter/Dashboard';
import PostJob from '@/pages/recruiter/PostJob';
import RecruiterRoute from "@/components/auth/RecruiterRoute";
import Sidebar from './components/layout/Sidebar';

const queryClient = new QueryClient();

const App = () => {
  // Correct state initialization
  const [role, setRole] = React.useState<"user" | "recruiter">("user");
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <AuthProvider>
        <RecruiterProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <BrowserRouter>
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} role={role} setRole={setRole} />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route element={<RootLayout role={role} setRole={setRole} />}>
                    {/* User routes */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profiles" element={<Profiles />} />
                    <Route path="/profiles/:id" element={<ProfileDetail />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/jobs/:id" element={<JobDetail />} />
                    <Route path="/profile" element={<OwnProfile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/messages" element={<Messages role="user" />} />
                    {/* Resource Pages */}
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/help-center" element={<HelpCenter />} />
                    <Route path="/learning" element={<LearningPortal />} />
                    <Route path="/community" element={<Community />} />
                    {/* Company Pages */}
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    {/* Recruiter routes */}
                    <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
                    <Route path="/jobs" element={<PostJob />} /> {/* /jobs goes to PostJob for recruiter */}
                    <Route path="/recruiter/post-job" element={<PostJob />} />
                    <Route path="/messages" element={<Messages role="recruiter" />} />
                    {/* Shared pages */}
                    <Route path="/profiles" element={<Profiles />} />
                    <Route path="/profiles/:id" element={<ProfileDetail />} />
                    <Route path="/profile" element={<OwnProfile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/help-center" element={<HelpCenter />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
                <Toaster />
                <Sonner />
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </RecruiterProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
