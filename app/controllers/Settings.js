// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function doBack(){
	$.settingsWin.close();
}

 var dataJson=Ti.App.Properties.getObject('givenName');
 Ti.API.info("JsonData",dataJson);
 
 
  var popupView = Titanium.UI.createView({
  	                  backgroundColor : '#FDF7EF',
                      top : 200,
                      left : 100,
                      width : 800,
                      height : 500,
                      visible : false,
                      
                  });
                 $.settingsWin.add(popupView);
                 
 var textArea = Ti.UI.createTextArea({
                    font: {
		                   fontSize: 48,
		                   fontFamily : 'Saumil_guj2'
	                      },
	                      padding : 4,
	                      top:"30dp",
	                      left : '10%',
	                      right : '25%',
	                      height : '40%',
	                      color : '#000000',
	                      borderRadius : 5,
	                      borderColor : '#000000',
	                      borderWidth : 1,
	                      hintText : 'say something....',
	                      backgroundColor:"#feffaf",
});  

popupView.add(textArea); 



var addButton = Titanium.UI.createButton({
   title: 'Add',
   left : '10%',
   borderColor : '#000000',
   borderWidth : '1dp',
   borderRadius : '4dp',
	height:"60",
	width:"150",
	font: {
		fontSize: 30
	},
	top:"270dp"
}); 
popupView.add(addButton);  

addButton.addEventListener('click', function() {
	            var textareaValue=textArea.value;
                          
                      });

var button_cancel = Titanium.UI.createButton({
   title: 'Cancel',
   right : '30%',
   borderColor : '#000000',
   borderWidth : '1dp',
   borderRadius : '4dp',
	height:"60",
	width:"150",
	font: {
		fontSize: 30
	},
	top:"270dp"
   });      

  popupView.add(button_cancel);               
 
 

for(var i=0; i < dataJson.length; i++){
	var view = Ti.UI.createView({
		layout : "horizontal",
		height : Ti.UI.SIZE,
	});
	$.view2.add(view);
	// view.addEventListener('click', doClick);
	
	for(var j=0; j < dataJson[i].length; j++){
		
		var view3 = Ti.UI.createView({
			top : '20dp',
			left : '40dp',
			height : '80dp',
			width : '155dp',
		   borderColor : '#000000',
			borderWidth : '1dp',
			borderRadius : '4dp',
			backgroundColor :"#ffd8af",
	    });
		
		var label1 = Ti.UI.createLabel({
			
			font: {
				fontSize: 28,
				fontWeight : 'bold',
				fontFamily : 'Saumil_guj2'
			},
			color : '#000000',
			textAlign : 'center',
			text : dataJson[i][j].toString()
		});
		//label.addEventListener('click', doClick);
		view3.add(label1);
		
		var label2 = Ti.UI.createLabel({
			/*
			borderColor : '#000000',
						borderWidth : '1dp',
						borderRadius : '4dp',*/
			
			font: {
				fontSize: 28,
				fontWeight : 'bold',
				fontFamily : 'FontAwesome'
			},
			color : '#000000',
			backgroundColor :"#ffd8af",
			top  :"4dp",
			right:"4dp",
			text :"\uf05c",
			textAlign:'center'
			
		});
		
		view3.add(label2);
		view.add(view3);
		
		}
		
		
		var label3 = Ti.UI.createLabel({
				  top : '20dp',
				   left : '40dp',
				   height : '80dp',
				   width : '155dp',	
				   borderColor : '#000000',
				   borderWidth : '1dp',
				   borderRadius : '4dp',
				   id :"addLabel"
					textAlign :'center',
					font: {
						fontSize: 28,
						fontWeight : 'bold',
						fontFamily : 'FontAwesome'
					},
					color : '#000000',
					backgroundColor :"#ffd8af",
					text :"\uf067"
				});
				view.add(label3);
				// Ti.API.info(dataJson[i][j]);
		       
				label3.addEventListener('click', function() {
                  
                      popupView.visible = 'true';
                      
                      
                      button_cancel.addEventListener('click', function() {
                          popupView.visible = 'false';
                      });
                  
                  });
				   
			   
}
$.view2.add(Ti.UI.createView({height : "4%"}));




