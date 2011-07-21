/**
* Appcelerator Titanium Platform
* Copyright (c) 2009-2011 by Appcelerator, Inc. All Rights Reserved.
* Licensed under the terms of the Apache Public License
* Please see the LICENSE included with this distribution for details.
**/
// Code is stripped-down version of Tweetanium, to expose new structure paradigm

(function() {
	var platformWidth = Ti.Platform.displayCaps.platformWidth;
	
	//create the main application window
	S.ui.createApplicationTabGroup = function(_args) {
		
		var tabgroup = Ti.UI.createTabGroup({});
		
		tabgroup.addTab(Ti.UI.createTab({
			title: "foo",
			window: S.ui.createFooWin()
		}));
		
		tabgroup.addTab(Ti.UI.createTab({
			title: "bar",
			window: S.ui.createBarWin()
		}));
		
		tabgroup.addTab(Ti.UI.createTab({
			title: "baz",
			window: S.ui.createBazWin()
		}));

		var msgmodal = Ti.UI.createView({backgroundColor:"#000",opacity:0.7,visible:false}),
			msgpanel = Ti.UI.createView({backgroundColor:"yellow",height:150,width:200,top:150,opacity:1}),
			msglabel = Ti.UI.createLabel({text:"FOO!",textAlign:"center"});
		msgmodal.addEventListener("click",function(){msgmodal.visible = false;});
		msgpanel.add(msglabel);
		msgmodal.add(msgpanel);
		tabgroup.add(msgmodal);
		
		Ti.App.addEventListener("app:msg",function(e){
			msglabel.text = e.msg;
			msgmodal.visible = true;
		});

		return tabgroup;
	};
})();