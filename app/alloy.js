// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

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