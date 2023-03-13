import React from 'react';
import Chart from 'react-apexcharts';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,

} from "reactstrap";
const BarChart = ({ data }) => {
  const chartData = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: data.map((item) => item.domain),
      },
    },
    series: [
      {
        name: 'total',
        data: data.map((item) => item.total),
      },
    ],
  };

  return (
    <Card>
    <CardBody>
    <CardTitle className='mb-2' tag="h5">Total Urls Count For Each Website</CardTitle>
  

      <div className="mixed-chart">
      <Chart options={chartData.options} series={chartData.series} type="bar" width="100%" height={500} />
    </div>
      </CardBody>
      </Card>
    
  );
};

export default BarChart;
