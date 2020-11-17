import React from "react";
import { Pie } from "react-chartjs-2";

const state = {
  labels: ["Positive", "Negative"],
  datasets: [
    {
      backgroundColor: ["#00c3ff", "#800080"],
      hoverBackgroundColor: ["#00c3ff", "#800080"],
      data: [70, 30],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg_color p-0 pt-2">
          <div className="container d-flex justify-content-center">
            <h6>Sentimental Analysis</h6>
          </div>
        </div>
        <div className="pie_body">
          <Pie
            data={state}
            options={{
              legend: {
                display: true,
                position: "left",
                align: "start",
                labels: {
                  boxWidth: 14,
                  fontSize: 10,
                  fontColor: "#000",
                },
              },
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
