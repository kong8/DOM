function prepareSlideshow() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("linklist")) return false;
	if (!document.getElementById("preview")) return false;
	var preview = document.getElementById("preview");
	preview.style.position = "absolute";
	preview.style.left = "0px";
	preview.style.top = "0px";
	var list = document.getElementById("linklist");
	var link = list.getElementsByTagName("a");
	link[0].onmouseover = function() {
		moveElement("preview",-200,0,10);
	}
	link[1].onmouseover = function() {
		moveElement("preview",-400,0,10);
	}
	link[2].onmouseover = function() {
		moveElement("preview",-600,0,10);
	}
}
addLoadEvent(prepareSlideshow);