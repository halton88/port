require <[ jquery ]> ->

	loader-in = !->
		$ '#main,nav' .fade-out \100
		$ '#main,nav' .add-class \hidden
		$ '#overlay' .fade-in \100
		$ \#overlay .remove-class \hidden

	#remove loader image here
	loader-out = !->
		$ '#overlay' .fade-out \100
		$ '#main, nav' .remove-class \hidden
		$ '#main,nav' .fade-in \100
		$ \#overlay .add-class \hidden
			
	{ loader-in, loader-out }