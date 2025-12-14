import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
