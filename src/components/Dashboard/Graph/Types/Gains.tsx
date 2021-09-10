import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { BoxType } from "../../../../UI";

export default function Gains() {
  const [currentFinancialEvent, setcurrentFinancialEvent] = useState([]);

  useEffect(() => {
    const localStorageEvents = JSON.parse(localStorage.getItem("Financial"));

    setcurrentFinancialEvent(localStorageEvents);
  }, []);

  // filter array infos //

  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  function getGains(type) {
    if (currentFinancialEvent) {
      const gainFilter = currentFinancialEvent.filter(
        (item) => item.category === "Gain"
      );

      const yearFlter = gainFilter.filter((item) => item.year === year);

      const monthFlter = yearFlter.filter((item) => item.month === month);

      const typeFilter = monthFlter.filter((item) => item.type === `${type}`);

      const typeInfo = typeFilter.reduce(function (accumulator, currentValue) {
        return accumulator + JSON.parse(currentValue.value);
      }, 0);

      return typeInfo;
    }
  }

  // graphs config //

  const data = {
    labels: ["salary", "freelance job", "others"],
    datasets: [
      {
        label: `All Gains in  ${month} - ${year}`,
        data: [
          getGains("Salary"),
          getGains("Freelance Job"),
          getGains("Others"),
        ],
        backgroundColor: [
          "rgba(11, 224, 107, 0.6)",
          "rgba(11, 224, 107, 0.6)",
          "rgba(11, 224, 107, 0.6)",
          "rgba(11, 224, 107, 0.6)",
        ],
        borderColor: [
          "rgb(37, 26, 29)",
          "rgb(37, 26, 29)",
          "rgb(37, 26, 29)",
          "rgb(37, 26, 29)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <BoxType>
      <Bar data={data} width={400} height={200} className="graph" />
    </BoxType>
  );
}
