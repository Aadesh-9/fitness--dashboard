import "../styles/schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-card">
      <div className="schedule-header">
        <h4>My Schedule</h4>
        <span className="view-all">View All</span>
      </div>

      <div className="schedule-item">
        <div>
          <strong>Monday</strong>
          <p>Stretch</p>
          <span>At 08:00</span>
        </div>
        <span className="badge">20 Sets</span>
      </div>

      <div className="schedule-item">
        <div>
          <strong>Tuesday</strong>
          <p>Back Stretch</p>
          <span>At 08:00</span>
        </div>
        <span className="badge orange">10 Round</span>
      </div>

      <div className="schedule-item">
        <div>
          <strong>Wednesday</strong>
          <p>Yoga</p>
          <span>At 08:00</span>
        </div>
        <span className="badge">20 min</span>
      </div>
    </div>
  );
};

export default Schedule;
