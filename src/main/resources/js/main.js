jQuery(document).ready(function($) {
  var languageCodes = {
    DA: 'Danish',
    DE: 'German',
    DZ: 'Bhutani',
    EL: 'Greek',
    EN: 'English',
    EO: 'Esperanto',
    ES: 'Spanish'
  };

  var key = BENNYS.Utilities.getKeyByValue('Greek', languageCodes);
  console.log(key); // EL
});