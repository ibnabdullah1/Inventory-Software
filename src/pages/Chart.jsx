import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const Chart = () => {
  const chartRef = useRef(null);
  let chart = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const options = {
        series: [
          {
            name: "Purchase",
            type: "column",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
          },
          {
            name: "Sales",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
          },
          {
            name: "Revenue",
            type: "line",
            data: [20, 29, 37, 36, 44, 45, 50, 58],
          },
        ],
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1, 4],
        },
        title: {
          text: "Purchase & Sales",
          align: "left",
          offsetX: 110,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#008FFB",
            },
            labels: {
              style: {
                colors: "#008FFB",
              },
            },
            title: {
              text: "Purchase",
              style: {
                color: "#008FFB",
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            seriesName: "Purchase",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#00E396",
            },
            labels: {
              style: {
                colors: "#00E396",
              },
            },
            title: {
              text: "Operating Sales",
              style: {
                color: "#00E396",
              },
            },
          },
          {
            seriesName: "Revenue",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#FEB019",
            },
            labels: {
              style: {
                colors: "#FEB019",
              },
            },
            title: {
              text: "Revenue",
              style: {
                color: "#FEB019",
              },
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft",
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
      };

      if (chart) {
        chart.destroy();
      }

      chart = new ApexCharts(chartRef.current, options);
      chart?.render();
      return () => {
        if (chart) {
          chart.destroy();
        }
      };
    }
  }, []);

  return <div id="chart" ref={chartRef} />;
};

export default Chart;
