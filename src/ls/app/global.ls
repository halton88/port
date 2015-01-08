(!(factory) ->
	if typeof define is \function and define.amd
		define [ \jquery ,\jquery-ui ], factory
	else
		factory jQuery)
.call @, ($) ->

	require <[ ang.ngRoute app.controller ]> !->