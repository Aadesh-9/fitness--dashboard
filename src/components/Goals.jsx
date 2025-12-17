import "../styles/goals.css";

const Goals = () => {
  return (
    <div className="goals-card">
      <div className="goals-header">
        <h4>Goals</h4>
        <span className="view-all">
          View All <span className="arrow">›</span>
        </span>
      </div>

      <div className="goal-item">
        <div className="goal-text">
          <p>ABS & Stretch</p>
          <span>Saturday, April 14</span>
        </div>
        <span className="badge">30 Min/day</span>
      </div>

      <div className="goal-item">
        <div className="goal-text">
          <p>Push Up</p>
          <span>Sunday, April 15</span>
        </div>
        <span className="badge">50 Sets/day</span>
      </div>
    </div>
  );
};

export default Goals;
