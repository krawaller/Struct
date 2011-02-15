/**
* Appcelerator Titanium Platform
* Copyright (c) 2009-2011 by Appcelerator, Inc. All Rights Reserved.
* Licensed under the terms of the Apache Public License
* Please see the LICENSE included with this distribution for details.
**/
// Code is stripped-down version of Tweetanium, to expose new structure paradigm

(function(){
	S.ui.createBazView = function(){
		var view = Ti.UI.createView({backgroundColor: "blue"}),
			textbox = Ti.UI.createTextField(S.combine({top:50,left:10,right:10,value:"radiant"},$$.TextField)),
			button = Ti.UI.createButton(S.combine({title:"Become!",top:130,height:30,width:150},$$.button));
		button.addEventListener("click",function(){
			S.app.mood = textbox.value;
			Ti.API.log("MOOD SET TO "+S.app.mood);
			Ti.App.fireEvent("app:mood.update");
			Ti.App.fireEvent("app:msg",{msg:"Awright! :)"});
			textbox.blur();
		});
		view.add(textbox);
		view.add(button); 
		return view;
	};
})();