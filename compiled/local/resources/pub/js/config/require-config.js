(function(){
  this.require = {
    baseUrl: '/port/resources/pub/js/lib',
    paths: {
      config: '../config/',
      app: '../app/',
      mod: '../mod/',
      'jquery': 'jquery/jquery',
      'angular': 'angular/angular',
      'jquery-ui': 'jquery/jquery-ui/jquery-ui-1.10.3.custom.min',
      'datatables': 'jquery/jquery.datatables/js/jquery.dataTables',
      'ui.accordion': 'jquery-ui/jquery.ui.accordion',
      'ui.autocomplete': 'jquery-ui/jquery.ui.autocomplete',
      'ui.button': 'jquery-ui/jquery.ui.button',
      'ui.core': 'jquery-ui/jquery.ui.core',
      'ui.datepicker': 'jquery-ui/jquery.ui.datepicker',
      'ui.dialog': 'jquery-ui/jquery.ui.dialog',
      'ui.draggable': 'jquery-ui/jquery.ui.draggable',
      'ui.droppable': 'jquery-ui/jquery.ui.droppable',
      'ui.effect.blind': 'jquery-ui/jquery.ui.effect-blind',
      'ui.effect.bounce': 'jquery-ui/jquery.ui.effect-bounce',
      'ui.effect.clip': 'jquery-ui/jquery.ui.effect-clip',
      'ui.effect.drop': 'jquery-ui/jquery.ui.effect-drop',
      'ui.effect.explode': 'jquery-ui/jquery.ui.effect-explode',
      'ui.effect.fade': 'jquery-ui/jquery.ui.effect-fade',
      'ui.effect.fold': 'jquery-ui/jquery.ui.effect-fold',
      'ui.effect.highlight': 'jquery-ui/jquery.ui.effect-highlight',
      'ui.effect.pulsate': 'jquery-ui/jquery.ui.effect-pulsate',
      'ui.effect.scale': 'jquery-ui/jquery.ui.effect-scale',
      'ui.effect.shake': 'jquery-ui/jquery.ui.effect-shake',
      'ui.effect.slide': 'jquery-ui/jquery.ui.effect-slide',
      'ui.effect.transfer': 'jquery-ui/jquery.ui.effect-transfer',
      'ui.effect': 'jquery-ui/jquery.ui.effect',
      'ui.menu': 'jquery-ui/jquery.ui.menu',
      'ui.mouse': 'jquery-ui/jquery.ui.mouse',
      'ui.position': 'jquery-ui/jquery.ui.position',
      'ui.progressbar': 'jquery-ui/jquery.ui.progressbar',
      'ui.resizable': 'jquery-ui/jquery.ui.resizable',
      'ui.selectable': 'jquery-ui/jquery.ui.selectable',
      'ui.slider': 'jquery-ui/jquery.ui.slider',
      'ui.sortable': 'jquery-ui/jquery.ui.sortable',
      'ui.spinner': 'jquery-ui/jquery.ui.spinner',
      'ui.tabs': 'jquery-ui/jquery.ui.tabs',
      'ui.tooltip': 'jquery-ui/jquery.ui.tooltip',
      'ui.widget': 'jquery-ui/jquery.ui.widget',
      'ang.animate': 'angular/angular-animate',
      'ang.aria': 'angular/angular-aria',
      'ang.cookies': 'angular/angular-cookies',
      'ang.csp': 'angular/angular-csp',
      'ang.loader': 'angular/angular-loader',
      'ang.messages': 'angular/angular-messages',
      'ang.mocks': 'angular/angular-mocks',
      'ang.ngRoute': 'angular/angular-route',
      'ang.resource': 'angular/angular-resource',
      'ang.sanitize': 'angular/angular-sanitize',
      'ang.scenario': 'angular/angular-scenario',
      'ang.touch': 'angular/angular-touch',
      'bootstrap': 'bootstrap.min',
      'highcharts': 'highcharts/highcharts',
      'swf.modified': '../scripts/swfobject_modified',
      'app.global': '../app/global',
      'app.global.functions': '../app/functions',
      'app.controller': '../app/controllers',
      'contact': '../app/pages/contact',
      'home': '../app/pages/home',
      'original-sp': '../app/pages/original-sp',
      'updated-sp': '../app/pages/updated-sp',
      'themes': '../app/pages/themes',
      'as-flash': '../app/pages/as-flash',
      'resume': '../app/pages/resume',
      'video-edit': '../app/pages/video-edit',
      'datatable-services': '../app/pages/datatable-services',
      'charts': '../app/pages/high-charts',
      'base.module': '../mod/base-module',
      'hc.pie': '../scripts/charts/pie/pie-script',
      'hc.column': '../scripts/charts/column/column-script',
      'hc.donut': '../scripts/charts/donut/donut-script'
    },
    shim: {
      'jquery-ui': {
        deps: ['jquery']
      },
      'ui.core': {
        deps: ['jquery']
      },
      'ui.widget': {
        deps: ['jquery']
      },
      'ui.effect': {
        deps: ['jquery']
      },
      'ui.position': {
        deps: ['jquery']
      },
      'ui.effect.blind': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.bounce': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.clip': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.drop': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.explode': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.fade': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.fold': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.highlight': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.pulsate': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.scale': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.shake': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.slide': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.effect.transfer': {
        deps: ['jquery', 'ui.effect']
      },
      'ui.mouse': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.position']
      },
      'ui.resizable': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.mouse']
      },
      'ui.selectable': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.mouse']
      },
      'ui.sortable': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.mouse']
      },
      'ui.draggable': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.mouse']
      },
      'ui.droppable': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.mouse', 'ui.draggable']
      },
      'ui.datepicker': {
        deps: ['jquery', 'ui.core']
      },
      'ui.accordion': {
        deps: ['jquery', 'ui.core', 'ui.widget']
      },
      'ui.button': {
        deps: ['jquery', 'ui.core', 'ui.widget']
      },
      'ui.progressbar': {
        deps: ['jquery', 'ui.core', 'ui.widget']
      },
      'ui.tabs': {
        deps: ['jquery', 'ui.core', 'ui.widget']
      },
      'ui.menu': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.position']
      },
      'ui.tooltip': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.position']
      },
      'ui.slider': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.mouse']
      },
      'ui.spinner': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.button']
      },
      'ui.autocomplete': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.position', 'ui.menu']
      },
      'ui.dialog': {
        deps: ['jquery', 'ui.core', 'ui.widget', 'ui.button', 'ui.draggable', 'ui.mouse', 'ui.position', 'ui.resizable']
      },
      'bootstrap': {
        deps: ['jquery']
      },
      'ang.animate': {
        deps: ['angular']
      },
      'ang.aria': {
        deps: ['angular']
      },
      'ang.cookies': {
        deps: ['angular']
      },
      'ang.csp': {
        deps: ['angular']
      },
      'ang.loader': {
        deps: ['angular']
      },
      'ang.messages': {
        deps: ['angular']
      },
      'ang.mocks': {
        deps: ['angular']
      },
      'ang.ngRoute': {
        deps: ['angular', 'ang.resource']
      },
      'ang.resource': {
        deps: ['angular']
      },
      'ang.sanitize': {
        deps: ['angular']
      },
      'ang.scenario': {
        deps: ['angular']
      },
      'ang.touch': {
        deps: ['angular']
      },
      'highcharts': {
        deps: ['jquery'],
        exports: 'Highcharts'
      },
      'datatables': {
        deps: ['jquery']
      },
      'hc.pie': {
        deps: ['jquery', 'highcharts']
      },
      'hc.column': {
        deps: ['jquery', 'highcharts']
      },
      'charts': {
        deps: ['hc.pie', 'hc.column', 'hc.donut']
      },
      'datatable-services': {
        deps: ['jquery', 'datatables']
      },
      'as-flash': {
        deps: ['swf.modified']
      }
    }
  };
}).call(this);
