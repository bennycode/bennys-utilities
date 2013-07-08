var BENNYS = {};
BENNYS.Utilities = {
  test: function() {
    return 'Hello World';
  },
  getURLParameter: function(_name, _url) {
    if (!_url) {
      _url = location.search;
    }
    var value = decodeURIComponent((RegExp(_name + '=' + '(.+?)(&|$)').exec(_url) || [, ''])[1]);
    // value is not set but the parameter can still be used as a boolean flag (example.html?activate)
    if (value.length === 0) {
      value = (new RegExp('[?|&]' + _name + '(?:[=|&|#|;|]|$)', 'i').exec(_url) !== null);
    }
    return value;
  },
  getFileExtension: function(filePath) {
    var extension = '';

    if (typeof filePath === 'string') {
      extension = filePath.substr((~-filePath.lastIndexOf('.') >>> 0) + 2);
    }

    return extension;
  },
  isHexColorCode: function(string) {
    var regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g;
    return regex.test(string);
  },
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
  }
};