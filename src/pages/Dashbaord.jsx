import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import StatsCards from "../components/StatsCards";
import GoalProgress from "../components/GoalProgress";
import FoodTable from "../components/FoodTable";
import Schedule from "../components/Schedule";
import Goals from "../components/Goals";
import PremiumCard from "../components/PremiumCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT MAIN AREA */}
      <div className="dashboard-main">
        {/* FULL WIDTH HEADER */}
        <Header />

        {/* BODY */}
        <div className="dashboard-body">
          {/* LEFT CONTENT */}
          <div className="dashboard-left">
            <Banner />
            <StatsCards />
            <GoalProgress />
            <FoodTable />
          </div>

          {/* RIGHT PANEL */}
          <div className="dashboard-right">
            <Schedule />
            <Goals />
            <PremiumCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
