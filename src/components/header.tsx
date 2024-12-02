import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";
import CitySearch from "./city-search";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-3">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
            alt="kiko"
            className="h-14"
          />
        </Link>
        <div className="flex gap-4">
          <CitySearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
