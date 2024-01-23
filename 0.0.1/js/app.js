function renderChart() {
    var options = {
        series: [{
            name: 'series1',
            data: [0, 31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [5, 11, 32, 45, 32, 34, 52, 41]
        }],
        chart: {
            toolbar: {
                show: false,
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false,
                    customIcons: []
                },
            },
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        annotations: {
            yaxis: [
                {
                    y: 100,
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            color: '#fff',
                            background: '#00E396'
                        },
                        text: 'Y-axis annotation on 8800'
                    }
                }
            ]
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}