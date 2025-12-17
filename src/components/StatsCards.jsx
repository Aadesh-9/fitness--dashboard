const StatsCards = () => {
  const stats = [
    {
      title: "Workout",
      value: "4 hrs",
      className: "workout",
      icon: "❚█══█❚",
    },
    {
      title: "Calories",
      value: "1800 kcal",
      className: "calories",
      icon: "🔥",
    },
    {
      title: "Steps",
      value: "2200 steps",
      className: "steps",
      icon: "👣",
    },
  ];

  return (
    <div className="stats-cards">
      {stats.map((item) => (
        <div key={item.title} className={`stat-card ${item.className}`}>
          <div className="stat-header">
            <div className="stat-icon">{item.icon}</div>
            <div>
              <p className="stat-title">{item.title}</p>
              <h4 className="stat-value">{item.value}</h4>
            </div>
          </div>

          <div className={`wave wave-${item.className}`}></div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
