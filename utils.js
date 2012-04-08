function anotherTrim(raw) {
  var input;
  if (typeof raw === 'string') {
    input = raw.replace(/^\s+|\s+$/g, '');
    return input;
  } else {
    return false;
  }
}

function elementSupportsAttribute(element, attribute) {
  return (attribute in document.createElement(element));
};

if (!elementSupportsAttribute('textarea', 'placeholder')) {
  // Fallback for browsers that don't support HTML5 placeholder attribute
  // assume $titles = <legend> elements, $txt = all elements should havte placeholder attribute
  var $titles = $('legend'), $txt = $titles.siblings();
  $.each($titles, function(_, title) {
    $txt.filter('#' + $(title).attr('title'))
        .data('text', 'Enter your ' + title.innerText + ' here...')
        .css('color', '#999')

        //key parts follow, using data-text custom attributes
        .on('focus', function() {
          if (this.value == $(this).data('text')) {
            this.value = '';
          }
        })
        .on('blur', function() {
          if (this.value == '') {
            this.value = $(this).data('text');
          }
        });
  });
}