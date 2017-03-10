// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var source = null;
var sourceParent = null;

function doBack() {
	$.settingsWin.close();
}

var dataJson = Ti.App.Properties.getObject('givenName');
Ti.API.info("JsonData", dataJson);

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
	
	var view3_1 = createLabelView(textareaValue);
	sourceParent.add(view3_1);
	
	sourceParent.add(createAddView());
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
	textArea.value = "";
});

function hidePopupView() {
	popupView.visible = 'false';
}

popupView.add(button_cancel);

for (var i = 0; i < dataJson.length; i++) {
	var view = Ti.UI.createView({
		layout : "horizontal",
		height : Ti.UI.SIZE,
	});
	$.view2.add(view);

	for (var j = 0; j < dataJson[i].length; j++) {
		var view3_1 = createLabelView(dataJson[i][j]);
		view.add(view3_1);
	}

	var addLabel = createAddView();
	view.add(addLabel);

	addLabel.addEventListener('click', function(e) {
		popupView.visible = 'true';
		source = e.source;
		sourceParent = e.source.parent;
	});

}
$.view2.add(Ti.UI.createView({
	height : "4%"
}));

function createLabelView(_string) {
	var view3 = Ti.UI.createView({
		top : '20dp',
		left : '40dp',
		height : '80dp',
		width : '155dp',
		borderColor : '#000000',
		borderWidth : '1dp',
		borderRadius : '4dp',
		backgroundColor : "#ffd8af",
	});

	var label1 = Ti.UI.createLabel({
		font : {
			fontSize : 28,
			fontWeight : 'bold',
			fontFamily : 'Saumil_guj2'
		},
		color : '#000000',
		textAlign : 'center',
		text : _string.toString()
	});
	view3.add(label1);

	var label2 = Ti.UI.createLabel({
		font : {
			fontSize : 28,
			fontWeight : 'bold',
			fontFamily : 'FontAwesome'
		},
		color : '#000000',
		backgroundColor : "#ffd8af",
		top : "4dp",
		right : "4dp",
		text : "\uf05c",
		textAlign : 'center'
	});

	view3.add(label2);
	return view3;
}

function createAddView(){
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
