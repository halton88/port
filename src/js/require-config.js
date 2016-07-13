requirejs.config({
	baseUrl: '',
	paths: {
		'jquery': 'https://code.jquery.com/jquery-2.2.4.min',
		'datatables': 'https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min',
		'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
		'highcharts': 'http://code.highcharts.com/highcharts',
		'underscore': 'http://underscorejs.org/underscore-min',
		'backbone': 'http://backbonejs.org/backbone-min',
		'backbone.app': 'backbone-app',
		'base-script': 'scripts',
		'hc.pie': 'charts/pie/pie-script',
		'hc.line': 'charts/line/line-script',
		'hc.donut': 'charts/donut/donut-script',
		'hc.column': 'charts/column/column-script'
	},
	shim: {
		'backbone': {
			deps: ['underscore']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'highcharts': {
			deps: ['jquery'],
			exports: 'Highcharts'
		},
		'datatables': {
			deps: ['jquery']
		},
		'base-script': {
			deps: ['bootstrap', 'backbone.app', 'hc.pie', 'hc.line', 'hc.donut', 'hc.column']
		},
		'hc.pie': {
			deps: ['highcharts']
		},
		'hc.line': {
			deps: ['highcharts']
		},
		'hc.donut': {
			deps: ['highcharts']
		},
		'hc.column': {
			deps: ['highcharts']
		},
		'backbone.app': {
			deps: [ 'datatables', 'backbone' ]
		}
	}
});

requirejs(['base-script']);
