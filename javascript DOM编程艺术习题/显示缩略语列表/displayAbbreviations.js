function displayAbbreviations() {
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;

	var abbreviation = document.getElementsByTagName("abbr");
	if (abbreviation.length < 1) return false;
	var defs = new Array();
	for (var i=0;i<abbreviation.length;i++) {
		var current_abbr = abbreviation[i];
		if (current_abbr.childNodes.length < 1) continue;    //平稳退化，即兼容IE6或者更早的版本
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	var dlist = document.createElement("dt");
	for (key in defs) {    // for/in循环把某个数组的下标临时赋值给一个变量;
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false；    //平稳退化，即兼容IE6或者更早的版本
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);