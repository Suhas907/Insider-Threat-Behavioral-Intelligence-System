// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid,
// // } from "recharts";

// // const data = [
// //   { month: "Jan", threats: 5 },
// //   { month: "Feb", threats: 8 },
// //   { month: "Mar", threats: 6 },
// //   { month: "Apr", threats: 10 },
// //   { month: "May", threats: 7 },
// // ];

// // function RiskChart() {
// //   return (
// //     <div
// //       style={{
// //         background: "white",
// //         padding: "20px",
// //         marginTop: "30px",
// //         borderRadius: "10px",
// //       }}
// //     >
// //       <h2>Threat Analysis</h2>

// //       <BarChart width={600} height={300} data={data}>
// //         <CartesianGrid strokeDasharray="3 3" />
// //         <XAxis dataKey="month" />
// //         <YAxis />
// //         <Tooltip />
// //         <Bar dataKey="threats" fill="#2563eb" />
// //       </BarChart>
// //     </div>
// //   );
// // }

// // export default RiskChart;

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Low", value: 15 },
//   { name: "Medium", value: 8 },
//   { name: "High", value: 4 },
// ];

// export default function RiskChart() {
//   return (
//     <div className="bg-white shadow rounded-xl p-5">
//       <h2 className="text-xl font-bold mb-4">Risk Distribution</h2>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const data = {
    labels: ["Low","Medium","High"],
    datasets:[
        {
            data:[65,25,10],
            backgroundColor:[
                "#22c55e",
                "#facc15",
                "#ef4444"
            ]
        }
    ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export default function RiskChart(){

    return(
//         <div className="flex justify-center items-center h-[320px]">
//   <div className="w-72 h-72">
//     <Doughnut data={data} options={options} />
//   </div>
// </div>
<div className="bg-white rounded-2xl shadow-sm p-6">

    <h2 className="text-2xl font-bold mb-6">
        Risk Distribution
    </h2>

    <div className="flex justify-center">
        <div className="w-64 h-64">
            <Doughnut
                data={data}
                options={options}
            />
        </div>
    </div>

</div>
    )

}