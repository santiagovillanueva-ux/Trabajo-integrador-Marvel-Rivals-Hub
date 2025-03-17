import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    } else {
      navigate(`/#${section}`);
    }
  };
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); 
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200); 
    }
  }, [location]);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/heroes?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/rivals image.webp" alt="Marvel Rivals Hub" width="140" />
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white btn-link" onClick={() => handleNavigation("novedades")}>
                News
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/heroes">Héroes</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white btn-link" onClick={() => handleNavigation("maps")}>
                Maps
              </button>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control search-input ms-2"
            id="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
