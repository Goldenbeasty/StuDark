kood()
function kood(){
let main = document.getElementsByTagName("div");
	for(elt of main){
		elt.style['background'] = "rgba(40,40,40,0.98)"

	}
let icon = document.getElementsByTagName("i");
	for(elt of icon)
	{
		elt.style['color'] = 'white';
	}
	let links = document.getElementsByTagName("a");
	for(elt of links)
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
	let random = document.getElementsByTagName("strong");
	for(elt of random)
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
}
setInterval(() => {
kood()
}, 250);