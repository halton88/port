$('a[data-toggle="tab"]').on("show.bs.tab", function(e){
	if(e.target.title.length > 0)
		document.title = "Tony Hall E-Portfolio: " + e.target.title;
	else
		document.title = "Tony Hall E-Portfolio: " + e.target.innerHTML;
});
$('nav a[data-toggle="tab"]:first').trigger("click");

$('.thumb').on('click', function () {
	$('#img-preview').attr('src', $(this).children().attr('src'));
	$('#img-modal').modal('show');
});

$('#main-nav li a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
});

if ($('#graph-column').length == 1) {
	$('#graph-column').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Stacked column chart'
		},
		xAxis: {
			categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Total fruit consumption'
			}
		},
		tooltip: {
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: true
		},
		plotOptions: {
			column: {
				stacking: 'percent'
			}
		},
		series: [{
			name: 'John',
			data: [5, 3, 4, 7, 2]
			}, {
			name: 'Jane',
			data: [2, 2, 3, 2, 1]
			}, {
			name: 'Joe',
			data: [3, 4, 4, 2, 5]
			}]
	});
}

if ($('#graph-donut').length == 1) {


	var colors = Highcharts.getOptions().colors,
		categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
		data = [{
			y: 55.11,
			color: colors[0],
			drilldown: {
				name: 'MSIE versions',
				categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0'],
				data: [10.85, 7.35, 33.06, 2.81],
				color: colors[0]
			}
			}, {
			y: 21.63,
			color: colors[1],
			drilldown: {
				name: 'Firefox versions',
				categories: ['Firefox 2.0', 'Firefox 3.0', 'Firefox 3.5', 'Firefox 3.6', 'Firefox 4.0'],
				data: [0.20, 0.83, 1.58, 13.12, 5.43],
				color: colors[1]
			}
			}, {
			y: 11.94,
			color: colors[2],
			drilldown: {
				name: 'Chrome versions',
				categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
						'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'],
				data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
				color: colors[2]
			}
			}, {
			y: 7.15,
			color: colors[3],
			drilldown: {
				name: 'Safari versions',
				categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
						'Safari 3.1', 'Safari 4.1'],
				data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
				color: colors[3]
			}
			}, {
			y: 2.14,
			color: colors[4],
			drilldown: {
				name: 'Opera versions',
				categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
				data: [0.12, 0.37, 1.65],
				color: colors[4]
			}
			}],
		browserData = [],
		versionsData = [],
		i,
		j,
		dataLen = data.length,
		drillDataLen,
		brightness;



	for (i = 0; i < dataLen; i += 1) {


		browserData.push({
			name: categories[i],
			y: data[i].y,
			color: data[i].color
		});


		drillDataLen = data[i].drilldown.data.length;
		for (j = 0; j < drillDataLen; j += 1) {
			brightness = 0.2 - (j / drillDataLen) / 5;
			versionsData.push({
				name: data[i].drilldown.categories[j],
				y: data[i].drilldown.data[j],
				color: Highcharts.Color(data[i].color).brighten(brightness).get()
			});
		}
	}


	$('#graph-donut').highcharts({
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Browser market share, April, 2011'
		},
		yAxis: {
			title: {
				text: 'Total percent market share'
			}
		},
		plotOptions: {
			pie: {
				shadow: false,
				center: ['50%', '50%']
			}
		},
		tooltip: {
			valueSuffix: '%'
		},
		series: [{
			name: 'Browsers',
			data: browserData,
			size: '60%',
			dataLabels: {
				formatter: function () {
					return this.y > 5 ? this.point.name : null;
				},
				color: 'white',
				distance: -30
			}
			}, {
			name: 'Versions',
			data: versionsData,
			size: '80%',
			innerSize: '60%',
			dataLabels: {
				formatter: function () {

					return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
				}
			}
			}]
	});
}

if ($('#graph-line').length == 1) {
	$('#graph-line').highcharts({
		title: {
			text: 'Monthly Average Temperature',
			x: -20
		},
		subtitle: {
			text: 'Source: WorldClimate.com',
			x: -20
		},
		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		},
		yAxis: {
			title: {
				text: 'Temperature (°C)'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
				}]
		},
		tooltip: {
			valueSuffix: '°C'
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: [{
			name: 'Tokyo',
			data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
			}, {
			name: 'New York',
			data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
			}, {
			name: 'Berlin',
			data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
			}, {
			name: 'London',
			data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
	});
}

if ($('#graph-pie').length == 1) {
	$('#graph-pie').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 1,
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
			  ["Massachusetts", 6692824],
			  ["Connecticut", 3596080],
			  ["Maine", 1328302],
			  ["New Hampshire", 1323459],
			  ["Rhode Island", 1051511],
			  ["Vermont", 626630],
			  ["New York", 19651127],
			  ["Pennsylvania", 12773801],
			  ["New Jersey", 8899339],
			  ["Florida", 19552860],
			  ["Georgia", 9992167],
			  ["North Carolina", 9848060],
			  ["Virginia", 8260405],
			  ["Maryland", 5928814],
			  ["South Carolina", 4774839],
			  ["West Virginia", 1854304],
			  ["Delaware", 925749],
			  ["District of Columbia", 646449],
			  ["Tennessee", 6495978],
			  ["Alabama", 4833722],
			  ["Kentucky", 4395295],
			  ["Mississippi", 2991207],
			  ["Texas", 26448193],
			  ["Louisiana", 4625470],
			  ["Oklahoma", 3850568],
			  ["Arkansas", 2959373],
			  ["Illinois", 12882135],
			  ["Ohio", 11570808],
			  ["Michigan", 9895622],
			  ["Indiana", 6570902],
			  ["Wisconsin", 5742713],
			  ["Missouri", 6044171],
			  ["Minnesota", 5420380],
			  ["Iowa", 3090416],
			  ["Kansas", 2893957],
			  ["Nebraska", 1868516],
			  ["South Dakota", 844877],
			  ["North Dakota", 723393],
			  ["Arizona", 6626624],
			  ["Colorado", 5268367],
			  ["Utah", 2900872],
			  ["Nevada", 2790136],
			  ["New Mexico", 2085287],
			  ["Idaho", 1612136],
			  ["Montana", 1015165],
			  ["Wyoming", 582658],
			  ["California", 38332521],
			  ["Washington", 6971406],
			  ["Oregon", 3930065],
			  ["Hawaii", 1404054],
			  ["Alaska", 735132]
			]
		}]
	});
}
