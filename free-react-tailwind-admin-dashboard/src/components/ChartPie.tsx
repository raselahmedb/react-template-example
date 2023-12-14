import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexChartProps {}

const ChartPie: React.FC<ApexChartProps> = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      legend: {
        show: true,
        position: 'bottom',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: true,
              position: 'bottom',
            },
          },
        },
      ],
    } as ApexOptions,
  });

  if(!chartData) {
    setChartData(Object);
  }

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Visitors Analytics
        </h3>
      </div>
      <div id="chartOne" className="-ml-5">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={400}
        />
      </div>
    </div>
  );
};

export default ChartPie;
