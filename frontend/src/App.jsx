import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Reports from "./pages/Reports";
import ActivityLogs from "./pages/ActivityLogs";
import Threats from "./pages/Threats";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/activitylogs" element={<ActivityLogs />} />
        <Route path="/threats" element={<Threats />} />
        <Route path="/settings" element={<Settings />} />
      </Routes> */}
      <Routes>
  {/* <Route path="/" element={<Dashboard />} /> */}
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/" element={<Login />} />
  <Route path="/employees" element={<Employees />} />
  <Route path="/reports" element={<Reports />} />
  <Route path="/activitylogs" element={<ActivityLogs />} />
  <Route path="/threats" element={<Threats />} />
  <Route path="/settings" element={<Settings />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;


// function App() {
//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center">
//       <div className="bg-white shadow-xl rounded-xl p-10">
//         <h1 className="text-4xl font-bold text-blue-600">
//           Tailwind is Working 🚀
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default App;