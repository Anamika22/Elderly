// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.viewLabel.text = args.text;
$.mainLabel.text = args.text;
$.closeLabel.visible = args.textVisible;
$.mainLabel.font = {fontSize : Ti.App.Properties.getInt('fontValue',28)};

function removeThisView(e){
	var closeSource = e.source;
	var viewLabelSource = closeSource.parent;
	var mainView = viewLabelSource.parent;
	mainView.remove(viewLabelSource);
}
