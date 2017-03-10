function doClick(e) {
	// alert(e.source.text);
	$.label.value = $.label.value + " " + e.source.text;
}

function openSettings(){
	Alloy.createController("Settings").getView().open();
}

function doClear(e){
	var str = $.label.value;
	var lastSpace = (str.lastIndexOf(" "));
	$.label.value = (str.substr(0,lastSpace));
}

function doClean(e){
	$.label.value = "";
}
updateView();
Ti.App.addEventListener('updateIndexView', updateView);
function updateView(){
	var dataJson = Ti.App.Properties.getObject('givenName');
	$.view1.removeAllChildren();
	for(var i=0; i < dataJson.length; i++){
		var view = Ti.UI.createView({
			layout : "horizontal",
			height : Ti.UI.SIZE,
		});
		$.view1.add(view);
		
		for(var j=0; j < dataJson[i].length; j++){
			var label = Alloy.createController('viewLabel', {text : dataJson[i][j].toString(), textVisible : false}).getView();
			
			label.addEventListener('click', doClick);
			view.add(label);
		}
	}
}
Alloy.Globals.updateindexView = updateView;

$.view1.add(Ti.UI.createView({height : "4%"}));

$.index.open();
