var BENNYS = {};

BENNYS.Utilities = {
    /**
     * Splits a given string into an object hierarchy.
     * 
     * @param {string} name Package name to be created as an object.
     * @returns {object} Returns an "object" or "undefined" (if the package name is not a string).
     */
    createNameSpace: function(name) {
        if (typeof name !== 'string')
            return undefined;
        var parent = window;
        var parts = name.split('.');
        if (parts[0] === 'window') {
            parts = parts.slice(1);
        }

        for (var i = 0; i < parts.length; i += 1) {
            if (typeof parent[parts[i]] === 'undefined') {
                parent[parts[i]] = {};
            }

            parent = parent[parts[i]];
        }

        return parent;
    },
    /**
     * Returns the extension of a given file or file path.
     * 
     * @param {string} filePath File or file path.
     * @returns {string} File extension (ex. "js" or "css").
     */
    getFileExtension: function(filePath) {
        var extension = '';
        if (typeof filePath === 'string') {
            extension = filePath.substr((~-filePath.lastIndexOf('.') >>> 0) + 2);
        }

        return extension;
    },
    /**
     * Returns the value (string) of an URL parameter.
     * If the URL parameter is given without any value (ex. index.html?param), then it returns true.
     * If the URL parameter is not given (ex. index.html), then it returns false.
     * 
     * @param {type} name Name of the parameter to be searched for.
     * @param {type} url URL to be searched. If no URL is passed, the current address will be used.
     * @returns {string} Parameter value
     */
    getURLParameter: function(name, url) {
        if (!url) {
            url = location.search;
        }

        var value = decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, ''])[1]);
        // value is not set but the parameter can still be used as a boolean flag (example.html?activate)
        if (value.length === 0) {
            value = (new RegExp('[?|&]' + name + '(?:[=|&|#|;|]|$)', 'i').exec(url) !== null);
        }

        return value;
    },
    /**
     * Checks if a color is valid (ex. #00FF00).
     * 
     * @param {type} string Color code
     * @returns {boolean} Information whether it is a valid hex code or not.
     */
    isHexColorCode: function(string) {
        var regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g;
        return regex.test(string);
    },
    /**
     * Checks if a browser is a Microsoft Internet Explorer (MSIE).
     * Guaranteed to work with IE8, IE9 and IE10.
     * 
     * @returns {boolean} True, when the browser is an Internet Explorer.
     */
    isMSIE: function() {
        var isMSIE = /*@cc_on!@*/0 ? true : false;
        return isMSIE;
    },
    /**
     * Returns "Hello World" to test Benny's Utilities.
     * @returns {string} "Hello World"
     */
    test: function() {
        return 'Hello World';
    }
};

BENNYS.Utilities.CSS = {
    /**
     * 
     * @param {type} imageWidth
     * @param {type} imageHeight
     * @param {type} pixelRatio window.devicePixelRatio
     * @returns {undefined}
     */
    getDimension: function(imageWidth, imageHeight, pixelRatio) {
        var cssWidth = imageWidth / pixelRatio;
        var cssHeight = imageHeight / pixelRatio;
        
        return {
            width: cssWidth,
            height: cssHeight
        };
    }
};

BENNYS.Utilities.Mobile = {
    /**
     * Returns the family name of a mobile device.
     * Examples: "iOS", "Android", "Kindle"
     * 
     * @see http://amazonsilk.wordpress.com/useful-bits/silk-user-agent/
     * @see http://html5-mobile.de/blog/wichtigsten-user-agents-mobile-devices-jquery-mobile
     * @param {type} _ua User Agent
     * @returns {String} Device family name (ex. "iOS")
     */
    getDeviceFamily: function(_ua) {

        var ua = _ua || navigator.userAgent;

        var family = 'unknown';

        if (/(iPhone|iPod|iPad)/.test(ua))
            family = 'iOS';
        else if (/Silk/.test(ua))
            family = 'Kindle';
        else if (/Android/.test(ua))
            family = 'Android';

        return family;

    },
    /**
     * Returns the device name.
     * Examples: "iPad", "Nexus 7", "Sony Tablet S"
     * 
     * @see http://stackoverflow.com/questions/17659845/regex-match-android-device-name-with-javascript
     * @see http://dmolsen.com/2012/01/30/introducing-ua-parser-php-slicing-dicing-user-agent-strings/
     * @param {type} _ua User agent
     * @returns {String} Device name
     */
    getDeviceName: function(_ua) {

        var ua = _ua || navigator.userAgent;

        var name = 'unknown';

        // Detect iOS name
        var matches = ua.match(/(iPhone|iPod|iPad)/);

        // TODO: Write functions instead of if... else... if...
        if (matches) {
            name = matches[0];
        } else {

            // Detect Android or Kindle name
            matches = (/;\s*([^;]+)\s+Build\//g).exec(ua);

            if (matches) {
                name = matches[1];
            } else {

                // Silk
                if ((/Silk/.test(ua))) {
                    name = 'Silk';
                }

            }

        }

        return name;
    }
};