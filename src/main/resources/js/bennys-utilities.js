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
   * @see http://stackoverflow.com/a/12900504/451634
   */
  getFileExtension: function(filePath) {
    var extension = '';

    if (typeof filePath === 'string') {
      extension = filePath.substr((~-filePath.lastIndexOf('.') >>> 0) + 2);
    }

    return extension;
  },
  /**
   * Returns the key of an associative array by it's value.
   * 
   * @param {type} value
   * @param {object} object associative array
   * @returns {string} The key if found.
   */
  getKeyByValue: function(value, object) {
    for (var key in object) {
      if (object[key] === value) {
        return key;
      }
    }
    return '';
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
   * Returns true if a number is even.
   * 
   * @param {number} number
   * @returns {boolean}
   */
  isEvenNumber: function(number) {
    return (number % 2 === 0) ? true : false;
  },
  /**
   * Checks if a color is a valid hex code (ex. #00FF00).
   * 
   * @param {type} string Color code
   * @returns {boolean} Information whether it is a valid hex code or not.
   */
  isHexColorCode: function(string) {
    var regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g;
    return regex.test(string);
  },
  isInArray: function(value, array) {
    return array.indexOf(value) > -1 ? true : false;
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
  },
  /**
   * Converts a given r, g, b, a subset into a hex code.
   * 
   * @param {number} r red channel (0...255)
   * @param {number} g green channel (0...255)
   * @param {number} b blue channel (0...255)
   * @param {number} a alpha transparency (0.0 transparent, 1.0 opaque)
   * @returns {string}
   * @see http://stackoverflow.com/a/9766195/451634
   * @see http://www.w3.org/wiki/CSS/Properties/color/RGBA
   */
  rgba2hex: function(r, g, b, a) {
    /*
     if (r > 255 || g > 255 || b > 255 || a > 255)
     throw "Invalid color component";
     */
    var value = (256 + r).toString(16).substr(1) + ((1 << 24) + (g << 16) | (b << 8) | a).toString(16).substr(1);
    return value.toUpperCase().substr(0, value.length - 2);
  },
  hex2rgba: function(hex, opacity) {
    hex = hex.replace('#', '');
    
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    var a = (typeof opacity === 'number') ? opacity / 100 : '1.0';

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  }

};

BENNYS.Utilities.CSS = {
  /**
   * Note: This function works only properly if the wrapper and the
   * innerElement have been already added/appended to the DOM.
   * 
   * @param {type} outerElement Wrapping jQuery element
   * @param {type} innerElement Encapsulated jQuery element
   * @returns {object} CSS properties that can be used with $(selector).css(properties)
   */
  getCenterProperties: function(outerElement, innerElement) {
    var top = parseInt((outerElement.height() - innerElement.height()) / 2, 10);
    var left = parseInt((outerElement.width() - innerElement.width()) / 2, 10);

    return {
      top: top,
      left: left,
      position: 'absolute'
    };
  },
  /**
   * 
   * @param {type} imageWidth
   * @param {type} imageHeight
   * @param {type} pixelRatio window.devicePixelRatio
   * @returns {object}
   */
  getDimension: function(imageWidth, imageHeight, pixelRatio) {
    if (typeof pixelRatio === 'undefined') {
      pixelRatio = window.devicePixelRatio;
    }

    var cssWidth = imageWidth / pixelRatio;
    var cssHeight = imageHeight / pixelRatio;

    return {
      width: cssWidth,
      height: cssHeight
    };
  },
  /**
   * Answers the question: "Which dimension should an image 
   * (designed for 1280x720 pixels) have on a Full-HD display
   * (1920x1080 pixels) to look sharp?".
   * 
   * @param {type} imageWidth
   * @param {type} imageHeight
   * @param {type} designWidth
   * @param {type} designHeight
   * @param {type} screenWidth
   * @param {type} screenHeight
   * @returns {object}
   */
  getScaledDimension: function(imageWidth, imageHeight, designWidth, designHeight, screenWidth, screenHeight) {
    var x = screenWidth / designWidth;
    var width = imageWidth * x;

    x = screenHeight / designHeight;
    var height = imageHeight * x;

    return {
      width: width,
      height: height
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