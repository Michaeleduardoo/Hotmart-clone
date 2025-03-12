import Logo from "../../assets/Header/hotmart_logo.svg";

function Header() {
  return (
    <header id="header" className="menu-container">
      <div className="logo-box">
        <img id="header-img" src={Logo} alt="Hotmart Logo" />
      </div>

      <nav id="nav-bar">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#hotmart" className="nav-link">
              Hotmart
            </a>
          </li>
          <li>
            <a href="#economia" className="nav-link">
              Economia
            </a>
          </li>
          <li>
            <a href="#autonomia" className="nav-link">
              Autonomia
            </a>
          </li>
          <li>
            <a href="#precos">Preços</a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
              href="https://hotmart.com/pt-br/signup"
            >
              Comece gratuitamente
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
