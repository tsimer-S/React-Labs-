import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>⚡</span> EnergyTech
      </div>

      <nav className="nav">
        <a href="#">Главная</a>
        <a href="#">О проекте</a>
        <a href="#">Технологии</a>
        <a href="#">Решения</a>
        <a href="#">Контакты</a>
      </nav>
    </header>
  );
}

export default Header;
