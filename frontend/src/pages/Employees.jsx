
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const employees = [
  {
    id: 1,
    name: "John Doe",
    department: "Finance",
    role: "Manager",
    risk: "Low",
    status: "Active",
  },
  {
    id: 2,
    name: "Alice Smith",
    department: "HR",
    role: "HR Executive",
    risk: "Medium",
    status: "Active",
  },
  {
    id: 3,
    name: "Robert Brown",
    department: "IT",
    role: "System Admin",
    risk: "High",
    status: "Suspended",
  },
  {
    id: 4,
    name: "Emma Wilson",
    department: "Security",
    role: "SOC Analyst",
    risk: "Low",
    status: "Active",
  },
];

export default function Employees() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h1 className="text-3xl font-bold">
                Employees
              </h1>

              <p className="text-gray-500">
                Manage employee information
              </p>
            </div>

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl">
              + Add Employee
            </button>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <table className="w-full">

              <thead>

                <tr className="border-b text-left">

                  <th className="pb-4">Name</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Risk</th>
                  <th>Status</th>
                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {employees.map((emp) => (

                  <tr key={emp.id} className="border-b" className="hover:bg-slate-50 transition">

                    <td className="py-4">{emp.name}</td>

                    <td>{emp.department}</td>

                    <td>{emp.role}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-lg text-white
                        ${
                          emp.risk === "Low"
                            ? "bg-green-500"
                            : emp.risk === "Medium"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {emp.risk}
                      </span>

                    </td>

                    <td>

                      <span
                        className={`font-semibold
                        ${
                          emp.status === "Active"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {emp.status}
                      </span>

                    </td>

                    <td>

                      <button className="text-cyan-600 hover:underline">
                        View
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