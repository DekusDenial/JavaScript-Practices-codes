function anotherTrim(raw) {
  var input;
  if (typeof raw === 'string') {
    input = raw.replace(/^\s+|\s+$/g, '');
    return input;
  } else {
    return false;
  }
}