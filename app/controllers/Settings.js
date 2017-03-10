// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var source = null;
var sourceParent = null;

var isAnyDataUpdated = true;

function doBack() {
	if(isAnyDataUpdated){
		var localDataJson = [];
		var parentView = $.view2;
		var parentViewLen = $.view2.children.length;
		for(var i = 0; i < parentViewLen-1; i++){
			var tempArr = [];
			for(var j = 0; j < parentView.children[i].children.length -1; j++){
				// alert(parentView.children[i].children[0].children[0].text);
				tempArr.push(parentView.children[i].children[j].children[0].text);
			}
			localDataJson.push(tempArr);
		}
		
		// Ti.API.info(JSON.stringify(localDataJson));
		Ti.App.Properties.setObject('givenName', localDataJson);
		Ti.App.fireEvent('updateIndexView');
	}
	$.settingsWin.close();
}

var dataJson = Ti.App.Properties.getObject('givenName');

var popupView = Titanium.UI.createView({
	backgroundColor : '#CCFDF7EF',
	visible : false,
});
$.settingsWin.add(popupView);

var textArea = Ti.UI.createTextArea({
	font : {
		fontSize : 48,
		fontFamily : 'Saumil_guj2'
	},
	padding : 4,
	top : "100dp",
	left : '10%',
	right : '10%',
	height : '30%',
	color : '#000000',
	borderRadius : 5,
	borderColor : '#000000',
	borderWidth : 1,
	hintText : 'say something....',
	backgroundColor : "#feffaf",
});

popupView.add(textArea);

var addButton = Titanium.UI.createButton({
	title : 'Add',
	left : '25%',
	borderColor : '#000000',
	borderWidth : '1dp',
	borderRadius : '4dp',
	height : "60",
	width : "150",
	font : {
		fontSize : 30
	},
	top : "50%",
	backgroundColor : '#808080',
	color : '#ffffff'
});
popupView.add(addButton);

addButton.addEventListener('click', function() {
	var textareaValue = textArea.value;

	sourceParent.remove(source);

	var view3_1 = Alloy.createController('viewLabel', {
		text : textareaValue.toString(),
		textVisible : true
	}).getView();
	sourceParent.add(view3_1);

	var addLabel = createAddView();
	sourceParent.add(addLabel);
	
	addLabel.addEventListener('click', function(e) {
		popupView.visible = 'true';
		source = e.source;
		sourceParent = e.source.parent;
	});

	hidePopupView();
});

var button_cancel = Titanium.UI.createButton({
	title : 'Cancel',
	right : '25%',
	borderColor : '#000000',
	borderWidth : '1dp',
	borderRadius : '4dp',
	height : "60",
	width : "150",
	font : {
		fontSize : 30
	},
	top : "50%",
	backgroundColor : '#808080',
	color : '#ffffff'
});
button_cancel.addEventListener('click', function() {
	hidePopupView();
});

function hidePopupView() {
	popupView.visible = 'false';
	textArea.value = "";
}

popupView.add(button_cancel);

for (var i = 0; i < dataJson.length; i++) {
	var view = Ti.UI.createView({
		layout : "horizontal",
		height : Ti.UI.SIZE,
	});
	$.view2.add(view);

	for (var j = 0; j < dataJson[i].length; j++) {
		var view3_1 = Alloy.createController('viewLabel', {
			text : dataJson[i][j].toString(),
			textVisible : true
		}).getView();
		view.add(view3_1);
	}

	var addLabel = createAddView();
	addButton.selectedIndex = i;
	view.add(addLabel);

	addLabel.addEventListener('click', function(e) {
		popupView.visible = 'true';
		source = e.source;
		e.source.selectedIndex;
		sourceParent = e.source.parent;
	});

}
$.view2.add(Ti.UI.createView({
	height : "4%"
}));

function createAddView() {
	var label3 = Ti.UI.createLabel({
		top : '20dp',
		left : '40dp',
		height : '80dp',
		width : '155dp',
		borderColor : '#000000',
		borderWidth : '1dp',
		borderRadius : '4dp',
		id : "addLabel",
		textAlign : 'center',
		font : {
			fontSize : 28,
			fontWeight : 'bold',
			fontFamily : 'FontAwesome'
		},
		color : '#000000',
		backgroundColor : "#ffd8af",
		text : "\uf067"
	});
	return label3;
}
