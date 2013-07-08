describe('BENNYS.Utilities.test', function() {

  it('returns "Hello World"', function() {
    var expected = 'Hello World';
    var actual = BENNYS.Utilities.test();
    expect(expected).toBe(actual);
  });

});

describe('BENNYS.Utilities.getURLParameter', function() {

  it('is true when a parameter is set without a value', function() {
    var url = 'http://www.example.com/?flag';
    var value = BENNYS.Utilities.getURLParameter('flag', url);
    expect(value).toBe(true);
  });

  it('is false when a parameter cannot be found in an URL', function() {
    var url = 'http://www.example.com/';
    var value = BENNYS.Utilities.getURLParameter('flag', url);
    expect(value).toBe(false);
  });

  it('gives the value when a parameter is defined', function() {
    var url = 'http://www.example.com/?parameter=12345';
    var value = BENNYS.Utilities.getURLParameter('parameter', url);
    expect(value).toBe('12345');
  });

  it('gives a string value when a parameter is defined', function() {
    var url = 'http://www.example.com/?parameter=12345';
    var value = BENNYS.Utilities.getURLParameter('parameter', url);
    expect(typeof value).toBe('string');
  });

  it('can parse values from the 1st position of a parameter list', function() {
    var url = 'http://www.example.com/?id=12345&text=hello&count=25';
    var value = BENNYS.Utilities.getURLParameter('id', url);
    expect(value).toBe('12345');
  });

  it('can parse values within a parameter list', function() {
    var url = 'http://www.example.com/?id=12345&text=hello&count=25';
    var value = BENNYS.Utilities.getURLParameter('text', url);
    expect(value).toBe('hello');
  });

  it('can parse values from the end of a parameter list', function() {
    var url = 'http://www.example.com/?id=12345&text=hello&count=25';
    var value = BENNYS.Utilities.getURLParameter('count', url);
    expect(value).toBe('25');
  });

  it('works with flags leading the parameter list', function() {
    var url = 'http://www.example.com/?flag&text=hello&count=25';
    var value = BENNYS.Utilities.getURLParameter('flag', url);
    expect(value).toBe(true);
  });

  it('works with flags within a parameter list', function() {
    var url = 'http://www.example.com/?id=12345&flag&count=25';
    var value = BENNYS.Utilities.getURLParameter('flag', url);
    expect(value).toBe(true);
  });

  it('works with flags at the end of a parameter list', function() {
    var url = 'http://www.example.com/?id=12345&text=hello&flag';
    var value = BENNYS.Utilities.getURLParameter('flag', url);
    expect(value).toBe(true);
  });

});

describe('BENNYS.Utilities.getFileExtension', function() {

  it('gives css for css files', function() {
    var url = 'games/multiplayer/bel/css/belote.css';
    var value = BENNYS.Utilities.getFileExtension(url);
    expect(value).toBe('css');
  });

  it('gives js for js files', function() {
    var url = 'games/multiplayer/bel/scripts/main.js';
    var value = BENNYS.Utilities.getFileExtension(url);
    expect(value).toBe('js');
  });

  it('gives an empty string if there is no extension', function() {
    var url = 'games/multiplayer/bel/scripts/main';
    var value = BENNYS.Utilities.getFileExtension(url);
    expect(value).toBe('');
  });

  it('gives an empty string if the input is an empty string', function() {
    var url = '';
    var value = BENNYS.Utilities.getFileExtension(url);
    expect(value).toBe('');
  });

  it('gives an empty string if the input is not a string', function() {
    var url = null;
    var value = BENNYS.Utilities.getFileExtension(url);
    expect(value).toBe('');
  });

});

describe('BENNYS.Utilities.isHexColorCode', function() {

  it('accepts hex color codes', function() {
    var expected = true;
    var actual = BENNYS.Utilities.isHexColorCode('#FF0000');
    expect(expected).toBe(actual);
  });

  it('does not accept hex color codes without hash sign', function() {
    var expected = false;
    var actual = BENNYS.Utilities.isHexColorCode('FF0000');
    expect(expected).toBe(actual);
  });

  it('does not accept color names', function() {
    var expected = false;
    var actual = BENNYS.Utilities.isHexColorCode('red');
    expect(expected).toBe(actual);
  });

});

describe('BENNYS.Utilities.createNameSpace', function() {

  it('creates objects out of strings', function() {
    var expected = 'object';
    var actual = typeof BENNYS.Utilities.createNameSpace('de.bennyn.javascript.package');
    expect(expected).toBe(actual);
  });

  it('needs a string in order to work properly', function() {
    var expected = 'undefined';
    var actual = typeof BENNYS.Utilities.createNameSpace(1337);
    expect(expected).toBe(actual);
  });

});