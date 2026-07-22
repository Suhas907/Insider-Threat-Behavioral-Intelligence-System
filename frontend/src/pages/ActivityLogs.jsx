
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const logs = [
  {
    id: 1,
    time: "09:15 AM",
    employee: "John Doe",
    activity: "Logged In",
    severity: "Low",
    ip: "192.168.1.25",
  },
  {
    id: 2,
    time: "09:42 AM",
    employee: "Alice Smith",
    activity: "Downloaded confidential.pdf",
    severity: "Medium",
    ip: "192.168.1.18",
  },
  {
    id: 3,
    time: "10:20 AM",
    employee: "Robert Brown",
    activity: "Failed Login Attempts",
    severity: "High",
    ip: "192.168.1.41",
  },
  {
    id: 4,
    time: "11:05 AM",
    employee: "Emma Wilson",
    activity: "USB Device Connected",
    severity: "Medium",
    ip: "192.168.1.33",
  },
];

export default function ActivityLogs() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <div className="mb-6">
            <h1 className="text-3xl font-bold">Activity Logs</h1>
            <p className="text-gray-500">
              Monitor employee activities in real time
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <table className="w-full">

              <thead>
                <tr className="border-b text-left">
                  <th className="pb-4">Time</th>
                  <th>Employee</th>
                  <th>Activity</th>
                  <th>Severity</th>
                  <th>IP Address</th>
                </tr>
              </thead>

              <tbody>

                {logs.map((log) => (
                  <tr key={log.id} className="border-b">

                    <td className="py-4">{log.time}</td>

                    <td>{log.employee}</td>

                    <td>{log.activity}</td>

                    <td>
                      <span
                        className={`rounded-full px-3 py-1 text-white 
                        ${
                          log.severity === "Low"
                            ? "bg-green-500"
                            : log.severity === "Medium"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {log.severity}
                      </span>
                    </td>

                    <td>{log.ip}</td>

                  </tr>
                ))}

              </tbody>

            </table>


          </div>
        <Footer/>
        </div>
      </div>
    </div>
    
  );
}