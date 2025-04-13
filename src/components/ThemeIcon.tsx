import React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeIconProps {
  theme: string;
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ theme }) => {
  const iconProps = {
    className: "h-5 w-5",
  };

  if (theme === "dark") {
    return <Sun {...iconProps} />;
  }
  
  if (theme === "light") {
    return <Moon {...iconProps} />;
  }

  // System theme - check actual dark/light preference
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return systemPrefersDark ? <Sun {...iconProps} /> : <Moon {...iconProps} />;
};

export default ThemeIcon;
