import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      label: "Positive",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#8a0a80",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [5, 10, 20, 25, 30],
    },
    {
      label: "Negative",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#f00f80",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [10, 5, 15, 18, 20],
    },
    {
      label: "Religion",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#805087",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [6, 15, 19, 28, 40, 35],
    },
    {
      label: "Photography",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#8cd080",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [14, 24, 30, 40, 56],
    },
    {
      label: "Nature",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#80b08b",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [16, 25, 36, 47, 58],
    },
    {
      label: "Technology",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#8a008a",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [15, 20, 30, 46, 59],
    },
    {
      label: "Gaming",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#880980",
      borderColor: "#898080",
      borderWidth: 1,
      data: [12, 29, 40, 45, 50],
    },
    {
      label: "Fashion",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#808080",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [9, 15, 20, 31, 46],
    },
    {
      label: "Politics",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#800070",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [17, 25, 38, 47, 50],
    },
    {
      label: "Sports",
      fill: false,
      lineTension: 0.2,
      backgroundColor: "#800080",
      borderColor: "#800080",
      borderWidth: 1,
      data: [10, 15, 20, 38, 41],
    },
  ],
};
class Time extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg_color p-0 pt-2">
          <div className="container d-flex justify-content-center">
            <h6>Time Post Analysis</h6>
          </div>
          <div className="graph_body">
            <Line
              data={state}
              options={{
                legend: {
                  display: true,
                  position: "right",
                  align: "start",
                  labels: {
                    boxWidth: 2,
                    fontSize: 8,
                    fontColor: "#000",
                  },
                },
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Time;
