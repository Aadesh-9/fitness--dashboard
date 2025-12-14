import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Banner from "../components/Banner";
// later you will import Schedule

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <Header />

        {/* Banner + Schedule Row */}
        <div className="top-row">
          <Banner />
          <div className="schedule-placeholder">
            {/* My Schedule will go here in STEP 8 */}
          </div>
        </div>

        {/* Other sections below */}
      </div>
    </div>
  );
};

export default Dashboard;
