/**
* Appcelerator Titanium Platform
* Copyright (c) 2009-2011 by Appcelerator, Inc. All Rights Reserved.
* Licensed under the terms of the Apache Public License
* Please see the LICENSE included with this distribution for details.
**/
// Code is stripped-down version of Tweetanium, to expose new structure paradigm

(function(){
	S.ui.createFooView = function(){
		var view = Ti.UI.createView({backgroundColor: "red"});
		view.add(Ti.UI.createLabel(S.combine({text: "See blogpost @ http://blog.krawaller.se"},$$.Label)));
		return view;
	};
})();