// http://pivotal.github.io/jasmine/

describe('BENNYS.Utilities.test', function() {

  it('returns "Hello World"', function() {
    var expected = 'Hello World';
    var actual = BENNYS.Utilities.test();
    expect(expected).toBe(actual);
  });

});

describe('BENNYS.Utilities.getKeyByValue', function() {

  it('works with numbers', function() {
    var languageCodes = {
      DA: 1,
      DE: 2,
      DZ: 3,
      EL: 4
    };

    var actual = BENNYS.Utilities.getKeyByValue(3, languageCodes);
    var expected = 'DZ';

    expect(actual).toBe(expected);
  });

  it('works with string values', function() {
    var languageCodes = {
      DA: 'Danish',
      DE: 'German',
      DZ: 'Bhutani',
      EL: 'Greek',
      EN: 'English',
      EO: 'Esperanto',
      ES: 'Spanish'
    };

    var actual = BENNYS.Utilities.getKeyByValue('Greek', languageCodes);
    var expected = 'EL';

    expect(actual).toBe(expected);
  });

  it('returns an empty string if nothing has been found', function() {

    var actual = BENNYS.Utilities.getKeyByValue('Greek', {});
    var expected = false;

    var isFound = false;
    if (actual) {
      isFound = true;
    }

    expect(isFound).toBe(expected);
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

  it('works with .htaccess files', function() {
    var file = '.htaccess';
    var value = BENNYS.Utilities.getFileExtension(file);
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

describe('BENNYS.Utilities.CSS.getCenterProperties', function() {

  it('can calcute the properties needed to center a jQuery element in another jQuery element', function() {

    var outerElement = $('<div id="wrapper" />');
    outerElement.css({
      width: '400px',
      height: '400px',
      backgroundColor: 'black'
    });

    var innerElement = $('<div id="enclosed" />');
    innerElement.css({
      width: '100px',
      height: '100px',
      backgroundColor: 'red'
    });

    var properties = BENNYS.Utilities.CSS.getCenterProperties(outerElement, innerElement);
    var actual = JSON.stringify(properties);
    var expected = '{"top":150,"left":150,"position":"absolute"}';

    expect(actual).toBe(expected);
  });

});

describe('BENNYS.Utilities.isEvenNumber', function() {

  it('detects even numbers', function() {
    var value = BENNYS.Utilities.isEvenNumber(72);
    expect(value).toBe(true);
  });

  it('detects uneven numbers', function() {
    var value = BENNYS.Utilities.isEvenNumber(73);
    expect(value).toBe(false);
  });

});

describe('BENNYS.Utilities.rgba2hex', function() {

  it('converts rgba values', function() {
    var value = BENNYS.Utilities.rgba2hex(162, 0, 255, 1);
    expect(value).toBe('#A200FF');
  });

  it('converts rgba values from a string', function() {
    var rgba = 'rgba(167, 209, 54, 0.5)';
    var value = BENNYS.Utilities.rgba2hex(rgba);
    expect(value).toBe('#A7D136');
  });
  
  it('converts rgb values from a string', function() {
    var rgba = 'rgb(167, 209, 54)';
    var value = BENNYS.Utilities.rgba2hex(rgba);
    expect(value).toBe('#A7D136');
  });  

});

describe('BENNYS.Utilities.hex2rgba', function() {

  it('converts hex color codes with a given alpha transparency', function() {
    var value = BENNYS.Utilities.hex2rgba('#A7D136', 50);
    expect(value).toBe('rgba(167, 209, 54, 0.5)');
  });

});

describe('BENNYS.Utilities.hex2rgba', function() {

  it('converts hex color codes without a given alpha transparency', function() {
    var value = BENNYS.Utilities.hex2rgba('#A7D136');
    expect(value).toBe('rgba(167, 209, 54, 1.0)');
  });

});