
let door = document.getElementsByTagName("div")
	for(elt of door)
	{		
		elt.style['color'] = "white";
		elt.style['background-color'] = 'rgba(40,40,40,0.98)'
		}
		setInterval(() => {
	let hyper = document.getElementsByTagName("a");
	for(elt of hyper)
	{
		elt.style['color'] = 'rgb(87, 170, 242)';
	}

	const types = [
		"div",
		"p",
		"input",
		"span",
		"textarea",
		"em"
		];
		for (name of types){

		let flexible = document.getElementsByTagName(name);
			for(elt of flexible)
			{
				elt.style['background-color'] = 'rgba(40,40,40,0.98)';
				elt.style['color'] = 'white';
			}
		}
		let lopid = document.getElementsByTagName("div")
		for(elt of lopid)
		{		
			elt.style['color'] = "white";
			elt.style['background-color'] = 'rgba(40,40,40,0.98)'
			}
		}, 200);