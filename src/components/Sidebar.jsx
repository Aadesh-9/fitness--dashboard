const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-text">Fitness</span>
        <span className="logo-icon">🏋️</span>
      </div>

      {/* Menu */}
      <ul className="menu">
        <li className="menu-item active">
          <span className="icon">▦</span>
          <span>Overview</span>
        </li>
        <li className="menu-item">
          <span className="icon">⏱</span>
          <span>Workout</span>
        </li>
        <li className="menu-item">
          <span className="icon">📄</span>
          <span>Diet Plan</span>
        </li>
        <li className="menu-item">
          <span className="icon">🎯</span>
          <span>Goals</span>
        </li>
        <li className="menu-item">
          <span className="icon">📅</span>
          <span>My Schedule</span>
        </li>
        <li className="menu-item">
          <span className="icon">📊</span>
          <span>Progress</span>
        </li>
      </ul>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="menu-item">
          <span className="icon">❓</span>
          <span>Help</span>
        </div>
        <div className="menu-item">
          <span className="icon">⏪</span>
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
