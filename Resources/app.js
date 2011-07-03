/**
* Appcelerator Titanium Platform
* Copyright (c) 2009-2011 by Appcelerator, Inc. All Rights Reserved.
* Licensed under the terms of the Apache Public License
* Please see the LICENSE included with this distribution for details.
**/
// Code is stripped-down version of Tweetanium, to expose new structure paradigm

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.include("/struct/struct.js");

S.app.mainTabGroup = S.ui.createApplicationTabGroup();
S.app.mainTabGroup.open();

S.app.mood = "RADIANT!";
Ti.App.fireEvent("app:mood.update");
setTimeout(function(){Ti.App.fireEvent("app:msg",{msg:"Welcome!"});},1000);