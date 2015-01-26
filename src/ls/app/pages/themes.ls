require <[ ]> !->
	$ \.thumb
	.on \click , !->
		$ \#img-preview .attr \src,
			$ @ .children!attr \src
		$ \#img-modal .modal \show