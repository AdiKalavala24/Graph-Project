Highcharts.chart("container", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },
  title: {
    text: "65%",
    align: "center",
    verticalAlign: "middle",
    y: 60,
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white",
        },
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "75%"],
      size: "110%",
    },
  },
  series: [
    {
      type: "pie",
      name: "",
      innerSize: "50%",
      data: (function () {
        var messengerPercentage = 42;
        var applicationsPercentage = 23;
        var otherPercentage =
          100 - messengerPercentage - applicationsPercentage;

        return [
          ["Messenger", messengerPercentage],
          ["Applications", applicationsPercentage],
          {
            name: "Other",
            y: otherPercentage,
            dataLabels: {
              enabled: false,
            },
          },
        ];
      })(),
    },
  ],
});
