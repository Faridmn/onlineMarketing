cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar.Browser",
        "pluginId": "cordova-plugin-statusbar",
        "merges": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-splashscreen": "3.1.0",
    "cordova-plugin-statusbar": "2.1.2",
    "cordova-plugin-whitelist": "1.2.1"
}
// BOTTOM OF METADATA
});