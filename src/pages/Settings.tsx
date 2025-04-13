import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BellRing, Lock, User, Shield, Bell, Moon, Sun, LogOut, UploadCloud } from "lucide-react";
import { getProfileById } from "@/utils/mockData"; // Import helper function
import { useTheme } from "@/context/ThemeContext"; // Import ThemeContext

const Settings = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme(); // Use ThemeContext
  const [isLoading, setIsLoading] = useState(false);

  // Fetch logged-in user's data from mockData
  const loggedInUser = getProfileById("loggedInUser");

  // Profile settings form state
  const [name, setName] = useState(loggedInUser?.name || "");
  const [email, setEmail] = useState(loggedInUser?.email || "");
  const [bio, setBio] = useState(loggedInUser?.bio || "");
  const [title, setTitle] = useState(loggedInUser?.title || "");
  const [company, setCompany] = useState(loggedInUser?.company || "");
  const [profilePicture, setProfilePicture] = useState(loggedInUser?.avatar || "");

  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);
  const [connectionRequests, setConnectionRequests] = useState(true);
  const [messages, setMessages] = useState(true);

  // Privacy settings
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [showEmail, setShowEmail] = useState(false);

  // Appearance settings
  type Theme = "light" | "dark" | "system"; // Define the Theme type
  const [pendingTheme, setPendingTheme] = useState<Theme>("system"); // Temporary state for unsaved theme

  // Apply theme dynamically
  const applyTheme = (selectedTheme: string) => {
    const root = document.documentElement;
    if (selectedTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (selectedTheme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.remove("dark", "light");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(systemPrefersDark ? "dark" : "light");
    }
  };

  const updateNavbarIcon = (selectedTheme: string) => {
    const navbarIcon = document.getElementById("navbar-theme-icon");
    if (navbarIcon) {
      if (selectedTheme === "dark") {
        navbarIcon.innerHTML = `<svg class="h-6 w-6"><use href="#moon-icon"></use></svg>`;
      } else if (selectedTheme === "light") {
        navbarIcon.innerHTML = `<svg class="h-6 w-6"><use href="#sun-icon"></use></svg>`;
      } else {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        navbarIcon.innerHTML = systemPrefersDark
          ? `<svg class="h-6 w-6"><use href="#moon-icon"></use></svg>`
          : `<svg class="h-6 w-6"><use href="#sun-icon"></use></svg>`;
      }
    }
  };

  useEffect(() => {
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(systemPrefersDark ? "dark" : "light");
      updateNavbarIcon(systemPrefersDark ? "dark" : "light");
    } else {
      applyTheme(theme);
      updateNavbarIcon(theme);
    }
  }, [theme]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    }, 1000);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Notification preferences updated",
        description: "Your notification settings have been saved.",
      });
    }, 1000);
  };
  
  const handleSavePrivacy = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Privacy settings updated",
        description: "Your privacy settings have been saved.",
      });
    }, 1000);
  };
  
  const handleSaveAppearance = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setTheme(pendingTheme); // Update theme globally
      toast({
        title: "Appearance settings updated",
        description: `Theme has been set to ${pendingTheme}.`,
      });
    }, 1000);
  };
  
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="mt-2 text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Settings Navigation (mobile) */}
            <div className="md:hidden">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="profile">
                    <User className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="notifications">
                    <Bell className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="privacy">
                    <Shield className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="appearance">
                    <Sun className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                  {/* Mobile Profile Content */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your personal information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSaveProfile} className="space-y-4">
                        <div className="flex flex-col items-center mb-6">
                          <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage src={profilePicture} alt={name} />
                            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <Button variant="outline" size="sm" asChild>
                            <label htmlFor="profile-photo-upload-mobile" className="cursor-pointer">
                              <UploadCloud className="h-4 w-4 mr-2" />
                              Change Photo
                            </label>
                          </Button>
                          <input
                            id="profile-photo-upload-mobile"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handlePhotoChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="profile-name">Full Name</Label>
                          <Input 
                            id="profile-name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="profile-email">Email</Label>
                          <Input 
                            id="profile-email" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="profile-title">Job Title</Label>
                          <Input 
                            id="profile-title" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="profile-company">Company</Label>
                          <Input 
                            id="profile-company" 
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="profile-bio">Bio</Label>
                          <Textarea 
                            id="profile-bio" 
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows={4}
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90"
                          disabled={isLoading}
                        >
                          {isLoading ? "Saving..." : "Save Changes"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="notifications">
                  {/* Mobile Notifications Content */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>
                        Manage how you receive notifications
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSaveNotifications} className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="email-notifications">Email Notifications</Label>
                              <p className="text-sm text-gray-500">Receive emails for important updates</p>
                            </div>
                            <Switch 
                              id="email-notifications" 
                              checked={emailNotifications}
                              onCheckedChange={setEmailNotifications}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="job-alerts">Job Alerts</Label>
                              <p className="text-sm text-gray-500">Receive notifications for new job matches</p>
                            </div>
                            <Switch 
                              id="job-alerts" 
                              checked={jobAlerts}
                              onCheckedChange={setJobAlerts}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="connection-requests">Connection Requests</Label>
                              <p className="text-sm text-gray-500">Receive notifications for new connection requests</p>
                            </div>
                            <Switch 
                              id="connection-requests" 
                              checked={connectionRequests}
                              onCheckedChange={setConnectionRequests}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="messages">Messages</Label>
                              <p className="text-sm text-gray-500">Receive notifications for new messages</p>
                            </div>
                            <Switch 
                              id="messages" 
                              checked={messages}
                              onCheckedChange={setMessages}
                            />
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90"
                          disabled={isLoading}
                        >
                          {isLoading ? "Saving..." : "Save Preferences"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="privacy">
                  {/* Mobile Privacy Content */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                      <CardDescription>
                        Control your privacy and security preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSavePrivacy} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="profile-visibility" className="block mb-2">Profile Visibility</Label>
                            <RadioGroup 
                              id="profile-visibility" 
                              value={profileVisibility} 
                              onValueChange={setProfileVisibility}
                              className="space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="public" id="visibility-public" />
                                <Label htmlFor="visibility-public">Public - Anyone can view your profile</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="connections" id="visibility-connections" />
                                <Label htmlFor="visibility-connections">Connections Only - Only your connections can view your profile</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="private" id="visibility-private" />
                                <Label htmlFor="visibility-private">Private - Only you can view your profile</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="show-email">Show Email Address</Label>
                              <p className="text-sm text-gray-500">Allow others to see your email address</p>
                            </div>
                            <Switch 
                              id="show-email" 
                              checked={showEmail}
                              onCheckedChange={setShowEmail}
                            />
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90"
                          disabled={isLoading}
                        >
                          {isLoading ? "Saving..." : "Save Privacy Settings"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="appearance">
                  {/* Mobile Appearance Content */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance Settings</CardTitle>
                      <CardDescription>
                        Customize the appearance of the application
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSaveAppearance} className="space-y-6">
                        <div>
                          <Label htmlFor="theme-selection" className="block mb-2">Theme</Label>
                          <RadioGroup 
                            id="theme-selection" 
                            value={pendingTheme} 
                            onValueChange={(value) => setPendingTheme(value as Theme)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="light" id="theme-light" />
                              <Label htmlFor="theme-light" className="flex items-center">
                                <Sun className="h-4 w-4 mr-2" />
                                Light Mode
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="dark" id="theme-dark" />
                              <Label htmlFor="theme-dark" className="flex items-center">
                                <Moon className="h-4 w-4 mr-2" />
                                Dark Mode
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="system" id="theme-system" />
                              <Label htmlFor="theme-system">Use System Preference</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90"
                          disabled={isLoading}
                        >
                          {isLoading ? "Saving..." : "Save Appearance Settings"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Settings Navigation (desktop) */}
            <div className="hidden md:block col-span-1">
              <div className="bg-white rounded-lg shadow-sm space-y-1 p-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start font-normal h-10"
                  asChild
                >
                  <a href="#profile-section">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start font-normal h-10"
                  asChild
                >
                  <a href="#notifications-section">
                    <BellRing className="h-4 w-4 mr-2" />
                    Notifications
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start font-normal h-10"
                  asChild
                >
                  <a href="#privacy-section">
                    <Shield className="h-4 w-4 mr-2" />
                    Privacy & Security
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start font-normal h-10"
                  asChild
                >
                  <a href="#appearance-section">
                    <Sun className="h-4 w-4 mr-2" />
                    Appearance
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start font-normal h-10 text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
            
            {/* Settings Content (desktop) */}
            <div className="hidden md:block col-span-3 space-y-8">
              {/* Profile Section */}
              <Card id="profile-section">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile} className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-4 flex-1 max-w-md">
                        <div className="space-y-2">
                          <Label htmlFor="profile-name-desktop">Full Name</Label>
                          <Input 
                            id="profile-name-desktop" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="profile-email-desktop">Email</Label>
                          <Input 
                            id="profile-email-desktop" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="profile-title-desktop">Job Title</Label>
                            <Input 
                              id="profile-title-desktop" 
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="profile-company-desktop">Company</Label>
                            <Input 
                              id="profile-company-desktop" 
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="profile-bio-desktop">Bio</Label>
                          <Textarea 
                            id="profile-bio-desktop" 
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows={4}
                          />
                        </div>
                      </div>
                      
                      <div className="ml-8 flex flex-col items-center">
                        <Avatar className="h-32 w-32 mb-4">
                          <AvatarImage src={profilePicture} alt={name} />
                          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm" asChild>
                          <label htmlFor="profile-photo-upload" className="cursor-pointer">
                            <UploadCloud className="h-4 w-4 mr-2" />
                            Change Photo
                          </label>
                        </Button>
                        <input
                          id="profile-photo-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handlePhotoChange}
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t pt-6 flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button 
                    onClick={handleSaveProfile}
                    className="bg-connectpro-primary hover:bg-connectpro-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Notifications Section */}
              <Card id="notifications-section">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveNotifications} className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications-desktop">Email Notifications</Label>
                          <p className="text-sm text-gray-500">Receive emails for important updates</p>
                        </div>
                        <Switch 
                          id="email-notifications-desktop" 
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="job-alerts-desktop">Job Alerts</Label>
                          <p className="text-sm text-gray-500">Receive notifications for new job matches</p>
                        </div>
                        <Switch 
                          id="job-alerts-desktop" 
                          checked={jobAlerts}
                          onCheckedChange={setJobAlerts}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="connection-requests-desktop">Connection Requests</Label>
                          <p className="text-sm text-gray-500">Receive notifications for new connection requests</p>
                        </div>
                        <Switch 
                          id="connection-requests-desktop" 
                          checked={connectionRequests}
                          onCheckedChange={setConnectionRequests}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="messages-desktop">Messages</Label>
                          <p className="text-sm text-gray-500">Receive notifications for new messages</p>
                        </div>
                        <Switch 
                          id="messages-desktop" 
                          checked={messages}
                          onCheckedChange={setMessages}
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t pt-6 flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button 
                    onClick={handleSaveNotifications}
                    className="bg-connectpro-primary hover:bg-connectpro-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save Preferences"}
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Privacy Section */}
              <Card id="privacy-section">
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Control your privacy and security preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSavePrivacy} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="profile-visibility-desktop" className="block mb-2">Profile Visibility</Label>
                        <RadioGroup 
                          id="profile-visibility-desktop" 
                          value={profileVisibility} 
                          onValueChange={setProfileVisibility}
                          className="space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="public" id="visibility-public-desktop" />
                            <Label htmlFor="visibility-public-desktop">Public - Anyone can view your profile</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="connections" id="visibility-connections-desktop" />
                            <Label htmlFor="visibility-connections-desktop">Connections Only - Only your connections can view your profile</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="private" id="visibility-private-desktop" />
                            <Label htmlFor="visibility-private-desktop">Private - Only you can view your profile</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-email-desktop">Show Email Address</Label>
                          <p className="text-sm text-gray-500">Allow others to see your email address</p>
                        </div>
                        <Switch 
                          id="show-email-desktop" 
                          checked={showEmail}
                          onCheckedChange={setShowEmail}
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t pt-6 flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button 
                    onClick={handleSavePrivacy}
                    className="bg-connectpro-primary hover:bg-connectpro-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save Privacy Settings"}
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Appearance Section */}
              <Card id="appearance-section">
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>
                    Customize the appearance of the application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveAppearance} className="space-y-6">
                    <div>
                      <Label htmlFor="theme-selection-desktop" className="block mb-2">Theme</Label>
                      <RadioGroup 
                        id="theme-selection-desktop" 
                        value={pendingTheme} 
                        onValueChange={(value) => setPendingTheme(value as Theme)}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="light" id="theme-light-desktop" />
                          <Label htmlFor="theme-light-desktop" className="flex items-center">
                            <Sun className="h-4 w-4 mr-2" />
                            Light Mode
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dark" id="theme-dark-desktop" />
                          <Label htmlFor="theme-dark-desktop" className="flex items-center">
                            <Moon className="h-4 w-4 mr-2" />
                            Dark Mode
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="system" id="theme-system-desktop" />
                          <Label htmlFor="theme-system-desktop">Use System Preference</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t pt-6 flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button 
                    onClick={handleSaveAppearance}
                    className="bg-connectpro-primary hover:bg-connectpro-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save Appearance Settings"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
