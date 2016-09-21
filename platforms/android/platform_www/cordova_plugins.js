cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-navigationbar/www/navigationbar.js",
        "id": "cordova-plugin-navigationbar.navigationbar",
        "clobbers": [
            "window.navigationbar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-navigationbar": "1.0.31",
    "cordova-plugin-whitelist": "1.3.0",
    "aemm-plugin-navto": "1.1.0"
};
// BOTTOM OF METADATA
});