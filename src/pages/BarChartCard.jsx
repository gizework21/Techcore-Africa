import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChartCard = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu"],
    datasets: [
      {
        label: "This week",
        data: [850400, 1246900, 2275000, 0],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Previous week",
        data: [2257500, 175800, 850400, 1224900],
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "₦" + value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="md:h-[475px] md:bg-[#E7F6FF] border-gray-200 rounded-lg py-8 ">
      <div className="bg-[#F8F8F8] rounded-lg md:h-[411px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartCard;
