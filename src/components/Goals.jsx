import "../styles/goals.css";

const Goals = () => {
  return (
    <div className="goals-card">
      <div className="goals-header">
        <h4>Goals</h4>
        <span className="view-all">View All</span>
      </div>

      <div className="goal-item">
        <div>
          <strong>ABS & Stretch</strong>
          <p>Saturday, April 14</p>
        </div>
        <span className="badge">30 Min/day</span>
      </div>

      <div className="goal-item">
        <div>
          <strong>Push Up</strong>
          <p>Sunday, April 15</p>
        </div>
        <span className="badge orange">50 Sets/day</span>
      </div>
    </div>
  );
};

export default Goals;
