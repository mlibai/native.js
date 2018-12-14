// NativeCookieKey.js

const NativeCookieKey = Object.freeze({
	currentTheme: "com.mlibai.native.cookie.currentTheme",
	currentUser: "com.mlibai.native.cookie.currentUser"
});

Object.defineProperty(window, "NativeCookieKey", {
	get: function() {
		return NativeCookieKey;
	}
});

module.exports = NativeCookieKey;