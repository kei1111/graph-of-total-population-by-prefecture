import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  populationdata: {
    prefName: string;
    data: { year: number; value: number }[];
  }[];
};

const Graph: React.FC<Props> = ({ populationdata }) => {
  let series: Highcharts.SeriesOptionsType[] = [];
  let categories = [];

  for (let p of populationdata) {
    let data = [];

    for (let pd of p.data) {
      if (pd.year >= 1980 && pd.year <= 2020) {
        data.push(pd.value);
        categories.push(String(pd.year));
      }
    }

    series.push({
      type: "line",
      name: p.prefName,
      data: data,
    });
  }

  const options: Highcharts.Options = {
    title: {
      text: "w",
      y: -90,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemMarginTop: 10,
      itemMarginBottom: 10,
    },
    xAxis: {
      // min: 1980,
      // max: 2020,
      lineWidth: 2,
      tickWidth: 2,
      tickLength: 10,
      gridLineWidth: 10,
      tickInterval: 2,
      title: {
        align: "high",
        text: "年度",
      },
      categories: categories,
      tickPosition: "inside",
    },
    yAxis: {
      // min: 100000,
      // max: 800000,
      lineWidth: 2,
      tickWidth: 2,
      minorGridLineWidth: 0,
      tickInterval: 100000,
      tickLength: 0,
      title: {
        align: "high",
        text: "人口数",
        rotation: 0,
        offset: 20,
        y: -15,
      },
      minorTickInterval: 100000, // 'auto'
      minorTickWidth: 2,
      minorTickPosition: "inside",
      minorTickLength: 10,
      labels: {},
    },

    series:
      series.length === 0
        ? [{ type: "line", name: "都道府県名", data: [] }]
        : series,
  };

  return (
    <div className="pt-0">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Graph;
