
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const threats = [
  {
    id: "TH-101",
    employee: "Robert Brown",
    type: "Multiple Failed Logins",
    risk: "High",
    status: "Investigating",
  },
  {
    id: "TH-102",
    employee: "Alice Smith",
    type: "Confidential File Download",
    risk: "Medium",
    status: "Open",
  },
  {
    id: "TH-103",
    employee: "John Doe",
    type: "VPN Login",
    risk: "Low",
    status: "Resolved",
  },
  {
    id: "TH-104",
    employee: "Emma Wilson",
    type: "USB Device Connected",
    risk: "Medium",
    status: "Monitoring",
  },
];

export default function Threats() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <div className="mb-6">
            <h1 className="text-3xl font-bold">Threat Detection</h1>
            <p className="text-gray-500">
              AI detected suspicious insider activities
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <table className="w-full">

              <thead>
                <tr className="border-b text-left">
                  <th className="pb-4">Threat ID</th>
                  <th>Employee</th>
                  <th>Threat Type</th>
                  <th>Risk</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {threats.map((item) => (
                  <tr key={item.id} className="border-b">

                    <td className="py-4 font-semibold">{item.id}</td>

                    <td>{item.employee}</td>

                    <td>{item.type}</td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-lg text-white
                        ${
                          item.risk === "Low"
                            ? "bg-green-500"
                            : item.risk === "Medium"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {item.risk}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`font-semibold
                        ${
                          item.status === "Resolved"
                            ? "text-green-600"
                            : item.status === "Investigating"
                            ? "text-red-600"
                            : "text-orange-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
                        Investigate
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
<Footer />
        </div>

      </div>
    </div>
  );
}