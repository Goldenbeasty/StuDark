let divider = document.getElementsByTagName("div");
	for(elt of divider){
		elt.style['background'] = "rgba(40,40,40,0.98)"

	}

let parrentname = document.getElementsByTagName("i");
	for(elt of parrentname)
	{
		elt.style['color'] = 'white';
	}
	let hyperlinks = document.getElementsByTagName("a");
	for(elt of hyperlinks)
	{
		elt.style['color'] = 'rgb(87, 170, 242)';
		elt.style['background-color'] = 'rgba(40,40,40,0.98)';
	}
	let kood = document.getElementsByTagName("code");
	for(elt of kood)
	{
		elt.style['color'] = 'white';
		elt.style['background-color'] = '#5a5a5a';
	}
	let kodutoo = document.getElementsByTagName("strong");
	for(elt of kodutoo)
	{
		elt.style['color'] = '#57aaff';
	}
const types = [
    "p",
    "span",
	"h2",
	"div",
	"h3",
	"h1",
	"li",
	"textarea",
	"td",
	"th"
];

for (name of types){

let flexible = document.getElementsByTagName(name);
	for(elt of flexible)
	{
		elt.style['background-color'] = 'rgba(40,40,40,0.98)';
		elt.style['color'] = 'white';
    }
}