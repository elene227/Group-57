function vaporcode(string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    if (ch !== ' ') {
      str += ch.toUpperCase() + '  ';
    }
  }
  
  return str.slice(0, -2) //-2 means stop 2 characters before the end start at 0 and
}