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
   * Returns "Hello World" to test Benny's Utilities.
   * @returns {string} "Hello World"
   */
  test: function() {
    return 'Hello World';
  }
};