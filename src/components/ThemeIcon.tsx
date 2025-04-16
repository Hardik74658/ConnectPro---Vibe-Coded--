import React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeIconProps {
  theme: "light" | "dark";
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ theme }) => {
  const iconProps = {
    className: "h-5 w-5",
  };

  if (theme === "dark") {
    return <Sun {...iconProps} />;
  }
  return <Moon {...iconProps} />;
};

export default ThemeIcon;
