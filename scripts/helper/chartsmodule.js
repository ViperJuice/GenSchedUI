
define([], function ()
{
    var dataSet = [];
    var dataLabel = [];
    var generation = 0;
    var addChart = function (nextScore) {
        if (nextScore != -1) {
            dataSet.push(nextScore);
            dataLabel.push(generation);
            generation++;
            var ctx = document.getElementById("genScoreCanvas").getContext("2d");
            //Position Chart
            var page1 = document.getElementById("page1");
            var csPage1 = getComputedStyle(page1);
            var topButton = document.getElementById("LoadAvailabilityData");
            var csTopButton = getComputedStyle(topButton);
            var width = parseInt(csPage1.getPropertyValue('width'), 10)
                - parseInt(csTopButton.getPropertyValue('width'), 10);
            var height = Math.floor(parseInt(csPage1.getPropertyValue('height'), 10) / 2);
            ctx.canvas.height = height;
            ctx.canvas.width = width;
            ctx.canvas.style.left = "0px";
            ctx.canvas.style.top = "0px";
            ctx.canvas.style.position = "absolute";

            var data =
            {
                labels: dataLabel,
                datasets: [
                    {
                        label: "Generation Top Scores",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataSet,
                        spanGaps: false,
                    }
                ]
            };
            // Using requirejs
            require(['Chart'], function (Chart) {
                var myChart = new Chart(ctx,
                {
                    type: 'line',
                    data: data,
                    options:
                    {
                        reponsive: false,
                        maintainAspectRatio: false,
                        scales:
                        {
                            yAxes:
                            [{
                                ticks:
                                {
                                    beginAtZero: true
                                }
                            }],
                            xAxes:
                            [{
                                ticks:
                                {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                })
            });
        }
    }
    return{addChart: addChart};
});