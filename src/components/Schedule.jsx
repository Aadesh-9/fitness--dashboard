import "../styles/schedule.css";
import stretchImg from "../assets/stretch.jpg";
import backStretchImg from "../assets/back-stretch.jpg";
import yogaImg from "../assets/yoga.jpg";

const Schedule = () => {
  return (
    <div className="schedule-card">
      <div className="schedule-header">
        <h4>My Schedule</h4>
        <span className="view-all">
          View All <span className="arrow">›</span>
        </span>
      </div>

      {/* ITEM */}
      <div className="schedule-item">
        <div className="schedule-content">
          <strong className="day">Monday</strong>

          <div className="schedule-left">
            <div className="schedule-icon">
              <img src={stretchImg} alt="Stretch" />
            </div>

            <div className="schedule-text">
              <p>Stretch</p>
              <span>At 08:00</span>
            </div>
          </div>
        </div>

        <span className="badge">20 Sets</span>
      </div>

      <div className="schedule-item">
        <div className="schedule-content">
          <strong className="day">Tuesday</strong>

          <div className="schedule-left">
            <div className="schedule-icon">
              <img src={backStretchImg} alt="Back Stretch" />
            </div>

            <div className="schedule-text">
              <p>Back Stretch</p>
              <span>At 08:00</span>
            </div>
          </div>
        </div>

        <span className="badge">10 Round</span>
      </div>

      <div className="schedule-item">
        <div className="schedule-content">
          <strong className="day">Wednesday</strong>

          <div className="schedule-left">
            <div className="schedule-icon">
              <img src={yogaImg} alt="Yoga" />
            </div>

            <div className="schedule-text">
              <p>Yoga</p>
              <span>At 08:00</span>
            </div>
          </div>
        </div>

        <span className="badge">20 min</span>
      </div>
    </div>
  );
};

export default Schedule;
