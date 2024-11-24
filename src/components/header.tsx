import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-3">
        <Link to={"/"}>
          <img src="/logo-dark.png" alt="kiko" className="h-14" />
        </Link>
      </div>
      <div>
        {/* search */}
        {/* toggle */}
      </div>
    </header>
  );
};

export default Header;
