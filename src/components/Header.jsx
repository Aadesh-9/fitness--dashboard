const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <p className="greeting">Good Morning</p>
        <h3>Welcome Back!</h3>
      </div>

      <div className="header-search">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search" />
      </div>

      <div className="header-right">
        <span className="icon-circle">🔔</span>
        <span className="icon-circle">⚙️</span>
        <img
          className="avatar"
          src="https://i.pravatar.cc/40?img=32"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
