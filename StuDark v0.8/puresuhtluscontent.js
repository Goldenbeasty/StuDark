let door = document.getElementsByTagName("div")
	for(elt of door)
	{		
		elt.style['color'] = "white";
		elt.style['background-color'] = 'rgba(40,40,40,0.98)'
		}
	

let texticons = document.getElementsByTagName("i");
	for(elt of texticons)
	{
		elt.style['color'] = 'white';
		elt.style['background-color'] = 'rgba(40,40,40,0.98)'   
	}

// special part for suhtlus because idk why
	//document.onload{} plzhelp
	setTimeout(() => {
	let door = document.getElementsByTagName("div");
	for(elt of door)
	{		
		elt.style['color'] = "white";
		elt.style['background-color'] = 'rgba(40,40,40,0.98)'
		}
}, 250);
	
	let hyper = document.getElementsByTagName("a");
	for(elt of hyper)
	{
		elt.style['color'] = 'rgb(87, 170, 242)';
		elt.style['background-color'] = 'rgba(40,40,40,0.98)'  
	}

	const types = [
		"div",
		"a",
		"p",
		"i",
		"input",
		"span"
		];
		
		for (name of types){
		
		let flexible = document.getElementsByTagName(name);
			for(elt of flexible)
			{
				elt.style['background-color'] = 'rgba(40,40,40,0.98)';
				elt.style['color'] = 'white';
			}
		}