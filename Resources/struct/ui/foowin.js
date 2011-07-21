/**
 * Appcelerator Titanium Platform
 * Copyright (c) 2009-2011 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 **/
// Code is stripped-down version of Tweetanium, to expose new structure paradigm
(function() {
	S.ui.createFooWin = function() {
		var win = Ti.UI.createWindow({
			backgroundColor: "red",
			title: "foo"
		});
		win.add(Ti.UI.createLabel(S.combine({
			text: "See blogpost @ http://blog.krawaller.se"
		},
		$$.Label)));

		var button = Titanium.UI.createButton({
			title: 'Subwindow',
			height: '20px',
			width: 150,
			top: 20
		});
		button.addEventListener('click', function(e) {
			subwin = S.ui.createsubwin();
			Ti.API.log(["WOO",subwin,S.app.mainTabGroup,typeof S.app.mainTabGroup.activeTab,typeof S.app.mainTabGroup.activeTab.open]);
			S.app.mainTabGroup.activeTab.open(subwin);
		});
		win.add(button);
		return win;
	};

	S.ui.createsubwin = function() {
		var win = Ti.UI.createWindow({
			backgroundColor: "red",
			title: "test sub"
		});
		win.add(Ti.UI.createLabel(S.combine({
			text: "Subwin test."
		},
		$$.Label)));
		return win;
	}
})();
