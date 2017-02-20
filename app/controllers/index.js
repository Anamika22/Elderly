function doClick(e) {
    $.label.value = $.label.value + " " + e.source.text;
}

function doClear(e){
	var str = $.label.value;
	var lastSpace = (str.lastIndexOf(" "));
	$.label.value = (str.substr(0,lastSpace));
}

$.index.open();
