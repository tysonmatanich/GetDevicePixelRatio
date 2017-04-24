/*! GetDevicePixelRatio | Author: Tyson Matanich, 2012 | License: MIT */
(function (window) {
	// device pixel ratio even before dom ready
	// http://stackoverflow.com/a/29913175
	window.getDevicePixelRatio = function () {
		var screen = window.screen || {};
		var systemXDPI = screen.systemXDPI || 1;
		var logicalXDPI = screen.logicalXDPI || 1;
		// To account for zoom, change to deviceXDPI instead of systemXDPI
		if (systemXDPI > logicalXDPI) return systemXDPI / logicalXDPI;
		// Fall back to legacy devicePixelRatio or return 1
		else return window.devicePixelRatio || 1;
	};
})(this);