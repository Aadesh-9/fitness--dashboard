const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-dot">●</span>
        <span>Fitness</span>
      </div>

      <ul className="menu">
        <li className="active">Overview</li>
        <li>Workout</li>
        <li>Diet Plan</li>
        <li>Goals</li>
        <li>My Schedule</li>
        <li>Progress</li>
      </ul>

      <div className="sidebar-footer">
        <p>Help</p>
        <p>Logout</p>
      </div>
    </aside>
  );
};

export default Sidebar;
