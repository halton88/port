@require =
    base-url: 'libs'
    paths:
        #libs
        \jquery : 'jquery/dist/jquery'
        \jquery-ui : 'jquery-ui/core'
        \datatables : 'datatables/media/js/jquery.dataTables.min'

        #misc libraries
        \bootstrap : \bootstrap/dist/bootstrap.min
        \highcharts : \highcharts-release/highcharts

        #misc scripts
        \swf.modified : \../scripts/swfobject_modified


        #modules
        \main : \../main
    shim:
            'jquery-ui':          deps: <[ jquery ]>
            # JQuery UI Core
            'ui.core':            deps: <[ jquery ]>
            'ui.widget':          deps: <[ jquery ]>
            'ui.effect':          deps: <[ jquery ]>
            'ui.position':        deps: <[ jquery ]>

            # JQuery UI Effects
            'ui.effect.blind':    deps: <[ jquery ui.effect ]>
            'ui.effect.bounce':   deps: <[ jquery ui.effect ]>
            'ui.effect.clip':     deps: <[ jquery ui.effect ]>
            'ui.effect.drop':     deps: <[ jquery ui.effect ]>
            'ui.effect.explode':  deps: <[ jquery ui.effect ]>
            'ui.effect.fade':     deps: <[ jquery ui.effect ]>
            'ui.effect.fold':     deps: <[ jquery ui.effect ]>
            'ui.effect.highlight':deps: <[ jquery ui.effect ]>
            'ui.effect.pulsate':  deps: <[ jquery ui.effect ]>
            'ui.effect.scale':    deps: <[ jquery ui.effect ]>
            'ui.effect.shake':    deps: <[ jquery ui.effect ]>
            'ui.effect.slide':    deps: <[ jquery ui.effect ]>
            'ui.effect.transfer': deps: <[ jquery ui.effect ]>

            # JQuery UI Mouse Events
            'ui.mouse':           deps: <[ jquery ui.core ui.widget ui.position ]>
            'ui.resizable':       deps: <[ jquery ui.core ui.widget ui.mouse ]>
            'ui.selectable':      deps: <[ jquery ui.core ui.widget ui.mouse ]>
            'ui.sortable':        deps: <[ jquery ui.core ui.widget ui.mouse ]>
            'ui.draggable':       deps: <[ jquery ui.core ui.widget ui.mouse ]>
            'ui.droppable':       deps: <[ jquery ui.core ui.widget ui.mouse ui.draggable ]>

            # JQuery UI Components
            'ui.datepicker':      deps: <[ jquery ui.core ]>
            'ui.accordion':       deps: <[ jquery ui.core ui.widget ]>
            'ui.button':          deps: <[ jquery ui.core ui.widget ]>
            'ui.progressbar':     deps: <[ jquery ui.core ui.widget ]>
            'ui.tabs':            deps: <[ jquery ui.core ui.widget ]>
            'ui.menu':            deps: <[ jquery ui.core ui.widget ui.position ]>
            'ui.tooltip':         deps: <[ jquery ui.core ui.widget ui.position ]>
            'ui.slider':          deps: <[ jquery ui.core ui.widget ui.mouse ]>
            'ui.spinner':         deps: <[ jquery ui.core ui.widget ui.button ]>
            'ui.autocomplete':    deps: <[ jquery ui.core ui.widget ui.position ui.menu ]>
            'ui.dialog':          deps: <[ jquery ui.core ui.widget ui.button ui.draggable ui.mouse ui.position ui.resizable ]>

            #bootstrap
            'bootstrap':          deps: <[ jquery ]>

            'highcharts':
                deps: <[ jquery ]>
                exports: 'Highcharts'
            'datatables':
                deps: <[ jquery ]>
