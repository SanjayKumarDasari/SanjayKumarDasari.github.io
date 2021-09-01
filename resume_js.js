
function openToggle(op){
	op.classList.toggle("change");
	var navbar = document.getElementById("menubar");
	var nav = document.getElementById("myNavbar");
	var p = window.getComputedStyle(op);
	var b = document.getElementById("main");
	b.style.transition = "0.5s";
	if(p.getPropertyValue("right") === "0px")
	{
		navbar.style.width = "250px";
		op.style.right =  "10px";
		nav.style.display = "block";
		b.style.marginRight = "250px";
	}
	else {
		navbar.style.width = "0px";
		nav.style.display = "none";
		op.style.right = "0px";
		b.style.marginRight = "0px";
	}
}

function menuClicked(op)
{
	var s = window.getComputedStyle(op);
	dis = s.getPropertyValue("display");
	if(dis === "block")
	{
		openToggle(op);
	}
	/*
	tabs = document.getElementsByClassName("tab");
	for(i = 0; i < tabs.length; i++)
	{
		tabs[i].style.display = "none";
	}
	y.style.display = "block"; */
}
var x = window.matchMedia("(max-width: 740px)");
var y = window.matchMedia("(min-width: 740px)");
x.addListener(setH);
y.addListener(rsetH);
function rsetH() {
	var menu_v = document.getElementById("menu");
				//alert(content_h);
				if(y.matches){
				menu_v.style.height = "100";
				}
}
function setH(){
				//alert("called");
				
				if(x.matches){
				var content_v = document.getElementById("content");	
				var content_h = content_v.clientHeight;
				var menu_v = document.getElementById("menu");
				//alert(content_h);
				menu_v.style.height = content_h+"px";
				//alert(menu_v.style.height);
				}
}