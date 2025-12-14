import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import StatsCards from "../components/StatsCards";
import GoalProgress from "../components/GoalProgress";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <Header />

        <div className="top-row">
          <Banner />

          <div className="schedule-placeholder"></div>
        </div>

        <div className="left-column">
          <StatsCards />
          <GoalProgress />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
