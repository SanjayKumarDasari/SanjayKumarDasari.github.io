
function changeMenu(x) {
	x.classList.toggle("change");
	var v = document.getElementById("menux");
	if (v.style.display === "none" || v.style.display === "") {
		v.style.display = "block";
  } else {
    v.style.display = "none";
  }
}

function menuClicked(x , y)
{
	var s = window.getComputedStyle(x);
	var i;
	
	dis = s.getPropertyValue("display");
	if(dis === "block")
	{
		changeMenu(x);
	}
	tabs = document.getElementsByClassName("tab");
	for(i = 0; i < tabs.length; i++)
	{
		tabs[i].style.display = "none";
	}
	y.style.display = "block";
}
menuClicked(getElementById('open'), getElementById('edu'))

