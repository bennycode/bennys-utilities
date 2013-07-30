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

describe('BENNYS.Utilities.isMSIE', function() {

  // NOTE: This test depends on the Jasmine render engine.
  it('is true only in Internet Explorer', function() {
    var expected = false;
    var actual = BENNYS.Utilities.isMSIE();
    expect(expected).toBe(actual);
  });

});

describe('BENNYS.Utilities.Mobile.getDeviceFamily', function() {

  it('cannot detect desktop devices', function() {
    var userAgent = '';

    var expected = 'unknown';
    var actual = BENNYS.Utilities.Mobile.getDeviceFamily(userAgent);

    expect(expected).toBe(actual);
  });

  it('detects Kindle Fire HD (Mobile view)', function() {
    var userAgent = 'Mozilla/5.0 (Linux; U; de-de; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like  Gecko) Silk/3.1 Safari/535.19 Silk-Accelerated=false';

    var expected = 'Kindle';
    var actual = BENNYS.Utilities.Mobile.getDeviceFamily(userAgent);

    expect(expected).toBe(actual);
  });

});

describe('BENNYS.Utilities.Mobile.getDeviceName', function() {

  it('cannot detect desktop devices', function() {
    var userAgent = '';

    var expected = 'unknown';
    var actual = BENNYS.Utilities.Mobile.getDeviceName(userAgent);

    expect(expected).toBe(actual);
  });

  it('detects Kindle Fire HD (Mobile view)', function() {
    var userAgent = 'Mozilla/5.0 (Linux; U; de-de; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like  Gecko) Silk/3.1 Safari/535.19 Silk-Accelerated=false';

    var expected = 'KFTT';
    var actual = BENNYS.Utilities.Mobile.getDeviceName(userAgent);

    expect(expected).toBe(actual);
  });


});

describe('BENNYS.Utilities.CSS.getDimension', function() {

  it('can calcute the CSS dimension needed for different device pixel ratios', function() {
    var expected = '{"width":1024,"height":768}';
    var imageWidth = 2048, imageHeight = 1536, pixelRatio = 2;
    var actual = BENNYS.Utilities.CSS.getDimension(imageWidth, imageHeight, pixelRatio);

    expect(expected).toBe(JSON.stringify(actual));
  });

});

describe('BENNYS.Utilities.CSS.getScaledDimension', function() {

  it('can calcute the image dimension needed to make it look sharp on a different display', function() {
    var expected = '{"width":1920,"height":1080}';
    var imageWidth = 1280, imageHeight = 720, designWidth = 1280, designHeight = 720, screenWidth = 1920, screenHeight = 1080;
    var actual = BENNYS.Utilities.CSS.getScaledDimension(imageWidth, imageHeight, designWidth, designHeight, screenWidth, screenHeight);

    expect(expected).toBe(JSON.stringify(actual));
  });

});