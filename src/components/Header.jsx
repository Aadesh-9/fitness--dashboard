const Header = () => {
  return (
    <div className="header">
      {/* Left text */}
      <div className="header-left">
        <p className="greeting">Good Morning</p>
        <h3>Welcome Back!</h3>
      </div>

      {/* Search */}
      <div className="header-search">
        <input type="text" placeholder="🔍 Search" />
      </div>

      {/* Right icons */}
      <div className="header-right">
        <span className="icon">⚙</span>
        <span className="icon">🔔</span>
        <div className="avatar">👩</div>
      </div>
    </div>
  );
};

export default Header;
