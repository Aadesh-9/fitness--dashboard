import "../styles/goalProgress.css";

const data = [
  { day: "Mon", workout: 30, calories: 55, steps: 75 },
  { day: "Tue", workout: 45, calories: 35, steps: 50 },
  { day: "Wed", workout: 75, calories: 50, steps: 60 },
  { day: "Thu", workout: 65, calories: 75, steps: 45 },
  { day: "Fri", workout: 30, calories: 55, steps: 65 },
  { day: "Sat", workout: 30, calories: 55, steps: 65 },
  { day: "Sun", workout: 30, calories: 55, steps: 65 },
];

const yAxis = [100, 80, 60, 40, 20, 0];

const GoalProgress = () => {
  return (
    <div className="goal-progress">
      {/* HEADER */}
      <div className="goal-header">
        <h4>Goal Progress</h4>
        <select className="weekly-select">
          <option>Weekly</option>
        </select>
      </div>

      {/* CHART WRAPPER */}
      <div className="chart-wrapper">
        {/* Y AXIS */}
        <div className="y-axis">
          {yAxis.map((v) => (
            <span key={v}>{v}%</span>
          ))}
        </div>

        {/* CHART AREA */}
        <div className="chart-area">
          {/* GRID */}
          <div className="grid">
            {yAxis.map((v) => (
              <span key={v} />
            ))}
          </div>

          {/* BARS */}
          <div className="chart">
            {data.map((item) => (
              <div className="chart-col" key={item.day}>
                <div className="bars">
                  <div
                    className="bar workout"
                    style={{ height: `${item.workout}%` }}
                  />
                  <div
                    className="bar calories"
                    style={{ height: `${item.calories}%` }}
                  />
                  <div
                    className="bar steps"
                    style={{ height: `${item.steps}%` }}
                  />
                </div>
                <span className="day">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LEGEND */}
      <div className="legend">
        <span>
          <span className="dot workout" /> Workout
        </span>
        <span>
          <span className="dot calories" /> Calories
        </span>
        <span>
          <span className="dot steps" /> Steps
        </span>
      </div>
    </div>
  );
};

export default GoalProgress;
