import {
  Users,
  ShieldAlert,
  Activity,
  Bell
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import EmployeeTable from "../components/EmployeeTable";
import RiskChart from "../components/RiskChart";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">

          <div className="grid grid-cols-4 gap-5 mb-6">
           <StatCard
  title="Employees"
  value="1,248"
  color="#06B6D4"
  icon={<Users size={28} />}
/>

<StatCard
  title="Threat Alerts"
  value="18"
  color="#EF4444"
  icon={<ShieldAlert size={28} />}
/>

<StatCard
  title="Risk Score"
  value="92%"
  color="#22C55E"
  icon={<Activity size={28} />}
/>

<StatCard
  title="Active Sessions"
  value="384"
  color="#F59E0B"
  icon={<Bell size={28} />}
/>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <EmployeeTable />
            <RiskChart />
          </div>
<Footer />
        </div>
      </div>
    </div>
  );
}