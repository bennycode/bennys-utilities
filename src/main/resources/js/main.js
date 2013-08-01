jQuery(document).ready(function($) {
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
  innerElement.css(properties);
  var actual = JSON.stringify(properties);
  // {"top":150,"left":150,"position":"absolute"}
  console.log(actual);
});