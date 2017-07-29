function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;//parentNode属性指某元素的父元素；
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
        parent.insertBefore(newElement,targetElement.nextSibling);//nextSibling属性指某元素下一个兄弟元素
	}	
}
