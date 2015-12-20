this.require = {
  baseUrl: '/',
  paths: {
    'jquery': 'src/node_modules/jquery/dist/jquery',
    'jquery-ui': 'src/node_modules/jquery-ui/',
    'datatables': 'datatables/media/js/jquery.dataTables.min',
    'bootstrap': 'bootstrap/dist/bootstrap.min',
    'highcharts': 'src/node_modules/highcharts-release/highcharts',
    'main': '../js/scripts'
  },
  shim: {
    'jquery-ui': {
      deps: ['jquery']
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
    }
  }
};
