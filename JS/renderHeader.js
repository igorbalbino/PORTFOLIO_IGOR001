/*VARIAVEIS*/
let links = [['Pagina Inicial','#', 'initial page'],
				['Projetos','./HTML/projetos.html', 'projects'],
				['Sobre Mim','./HTML/about.html', 'about me'],
				['Contato','./HTML/contact.html', 'contact']];

let navHeaderElement = document.getElementById('header-nav');
let DIVnavElement = document.createElement('div');
let ULnavElement = document.createElement('ul');

function renderMenu(){
	addAttributetoDIV();
	addAttributetoUL();
	links.forEach(function(link) {
		addLinkToUL(link);
	});
	addULToDIV(ULnavElement);
	addDIVtoNAVelement();
}

function addAttributetoDIV(){
	DIVnavElement.setAttribute("id", "header-navbar-div");
	DIVnavElement.setAttribute("class", "container-fluid");
}

function addULToDIV(ul) {
	DIVnavElement.appendChild(ul);
}

function addAttributetoUL(){
	ULnavElement.setAttribute("class", "nav navbar-nav menu-inline-group");
}

function addLinkToUL(link) {
	let LInavElement = document.createElement('ul');
	let AnavElement = document.createElement('a');
	addAttributesToLI(LInavElement);
	addAttributesToA(AnavElement, link);
	LInavElement.appendChild(AnavElement);
}

function addAttributesToLI(element) {
	element.setAttribute("class", "menu-inline-item");
}

function addAttributesToA(a, link) {
	a.setAttribute("class", "nav-link active");
	a.innerHTML = link[0];
	a.setAttribute("href", link[1]);
	a.setAttribute("aria-current", link[2]);
}

function addDIVtoNAVelement() {
	navHeaderElement.appendChild(DIVnavElement);
}

renderMenu();