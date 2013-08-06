jQuery(document).ready(function($) {
  var outerElement = $('<div id="wrapper" />');
  outerElement.css({
    backgroundColor: 'black'
  });

  var innerElement = $('<div id="enclosed" />');
  innerElement.css({
    backgroundColor: 'red'
  });

  var properties = BENNYS.Utilities.CSS.getCenterProperties(outerElement, innerElement);
  innerElement.css(properties);
  var actual = JSON.stringify(properties);
  // {"top":150,"left":150,"position":"absolute"}
  console.log(actual);
});