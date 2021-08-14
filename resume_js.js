
function openToggle(op){
	op.classList.toggle("change");
	var navbar = document.getElementById("menubar");
	var nav = document.getElementById("myNavbar");
	var p = window.getComputedStyle(op);
	var b = document.getElementById("main");
	b.style.transition = "0.5s";
	if(p.getPropertyValue("right") === "30px")
	{
		navbar.style.width = "250px";
		op.style.right =  "200px";
		nav.style.display = "block";
		b.style.marginRight = "250px";
	}
	else {
		navbar.style.width = "0px";
		nav.style.display = "none";
		op.style.right = "30px";
		b.style.marginRight = "0px";
	}
}

function menuClicked(op , y)
{
	var s = window.getComputedStyle(op);
	var i;
	
	dis = s.getPropertyValue("display");
	if(dis === "block")
	{
		openToggle(op);
	}
	tabs = document.getElementsByClassName("tab");
	for(i = 0; i < tabs.length; i++)
	{
		tabs[i].style.display = "none";
	}
	y.style.display = "block";
}
