$(function () {

    if($('#graph-pie').length == 1) {
        $('#graph-pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'US Population by State (est. 2013)'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: "States",
            data: [
              ["Massachusetts",6692824  ],
              ["Connecticut",3596080  ],
              ["Maine",1328302  ],
              ["New Hampshire",1323459  ],
              ["Rhode Island",1051511  ],
              ["Vermont",626630  ],
              ["New York",19651127  ],
              ["Pennsylvania",12773801  ],
              ["New Jersey",8899339  ],
              ["Florida",19552860  ],
              ["Georgia",9992167  ],
              ["North Carolina",9848060  ],
              ["Virginia",8260405  ],
              ["Maryland",5928814  ],
              ["South Carolina",4774839  ],
              ["West Virginia",1854304  ],
              ["Delaware",925749  ],
              ["District of Columbia",646449  ],
              ["Tennessee",6495978  ],
              ["Alabama",4833722  ],
              ["Kentucky",4395295  ],
              ["Mississippi",2991207  ],
              ["Texas",26448193  ],
              ["Louisiana",4625470  ],
              ["Oklahoma",3850568  ],
              ["Arkansas",2959373  ],
              ["Illinois",12882135  ],
              ["Ohio",11570808  ],
              ["Michigan",9895622  ],
              ["Indiana",6570902  ],
              ["Wisconsin",5742713  ],
              ["Missouri",6044171  ],
              ["Minnesota",5420380  ],
              ["Iowa",3090416  ],
              ["Kansas",2893957  ],
              ["Nebraska",1868516  ],
              ["South Dakota",844877  ],
              ["North Dakota",723393  ],
              ["Arizona",6626624  ],
              ["Colorado",5268367  ],
              ["Utah",2900872  ],
              ["Nevada",2790136  ],
              ["New Mexico",2085287  ],
              ["Idaho",1612136  ],
              ["Montana",1015165  ],
              ["Wyoming",582658  ],
              ["California",38332521  ],
              ["Washington",6971406  ],
              ["Oregon",3930065  ],
              ["Hawaii",1404054  ],
              ["Alaska",735132  ]
            ]
        }]
        });
    }
});
