function addLoadEvent(func){
  var oldonload=window.onload;
  if (typeof window.onload!="function"){
    window.onload=func;
  }else {
    window.onload=function() {
      oldonload();
      func();
       }
    }
}
function insertAfter(newElement,targetElement) {
  var parent=targetElement.parentNode;
  