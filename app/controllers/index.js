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

var dataJson = [
	["હેલો", "સારા", "મહાન", "પ્રેમ","તમે", "હું", "છું", "આભાર", "ગુડબાય", "સમય શું છે?"],
	["કટોકટી","કોલ","મદદ", "ડૉક્ટર", "એમ્બ્યુલન્સ", "પોલીસ", "આગ વિભાગ"],
	["હું","લાગે","હેપી", "ઉદાસી", "ક્રોધિત", "થાકેલા", "ઊંઘમાં"],
	["હું", "માંગો છો", "ખોરાક", "બ્રેકફાસ્ટ", "રાત્રિભોજન", "ખાવું", "ભૂખ્યા", "સૂપ", "પિઝા", "ચીઝ", "દ્રાક્ષ", "બનાના", "સફરજન", "નારંગી", "દાડમ", "આઈસ્ક્રીમ", "કેક"],
	["પીણું", "પાણી", "દૂધ", "ચા", "કોફી"]
];

Ti.App.Properties.setObject('givenName', dataJson);

// var dataJson = [
	// ["Hi", "Hey", "Good", "Great", "Love", "You", "am", "Thank you", "Goodbye", "What time?"],
	// ["Emergency", "Call", "Help", "Doctor", "Ambulance", "Police", "Fire department"],
	// ["I feel", "Happy", "Sad", "Angry","Tired", "Sleepy"],
	// ["I want", "Food", "Breakfast", "Dinner", "Eat", "Hungry", "Soup", "Pizza", "Chees", "Egg", "Grapes", "Banana", "Apple", "Orange", "Ice cream", "Cake"],
	// ["Drink", "Water", "Milk", "Tea", "Coffee"],
	// ["Cold", "Hot"],
	// ["Medication", "Play", "Pause", "Music"]
// ];

for(var i=0; i < dataJson.length; i++){
	var view = Ti.UI.createView({
		layout : "horizontal",
		height : Ti.UI.SIZE,
	});
	$.view1.add(view);
	// view.addEventListener('click', doClick);
	
	for(var j=0; j < dataJson[i].length; j++){
		var label = Ti.UI.createLabel({
			top : '20dp',
			left : '40dp',
			height : '80dp',
			width : '155dp',
			borderColor : '#000000',
			borderWidth : '1dp',
			borderRadius : '4dp',
			font: {
				fontSize: 28,
				fontWeight : 'bold',
				fontFamily : 'Saumil_guj2'
			},
			color : '#000000',
			backgroundColor :"#ffd8af",
			textAlign : 'center',
			text : dataJson[i][j].toString()
		});
		label.addEventListener('click', doClick);
		view.add(label);
		// Ti.API.info(dataJson[i][j]);
	}
	
}
$.view1.add(Ti.UI.createView({height : "4%"}));

$.index.open();
