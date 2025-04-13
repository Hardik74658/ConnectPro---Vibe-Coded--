import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

import Index from "./pages/Index";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Profiles from "./pages/Profiles";
import ProfileDetail from "./pages/ProfileDetail";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Messages from "@/pages/Messages";
import OwnProfile from "./pages/OwnProfile";

// Footer Pages
import Blog from "./pages/resources/Blog";
import HelpCenter from "./pages/resources/HelpCenter";
import LearningPortal from "./pages/resources/LearningPortal";
import Community from "./pages/resources/Community";
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import TermsOfService from "./pages/company/TermsOfService";

import Navbar from "@/components/layout/Navbar";
import { RootLayout } from "@/components/layout/RootLayout";
import BlogPost from "./components/blog/BlogPost";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route element={<RootLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profiles" element={<Profiles />} />
                  <Route path="/profiles/:id" element={<ProfileDetail />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/jobs/:id" element={<JobDetail />} />
                  <Route path="/profile" element={<OwnProfile />} />
                  <Route path="/settings" element={<Settings />} />
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
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
