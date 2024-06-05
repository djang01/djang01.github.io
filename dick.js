(function titleScroller(text) {
  document.title = text;
  setTimeout(function () {
    titleScroller(text.substr(1) + text.substr(0, 1));
  }, 1);
}("01110110 01101111 01101001 01100100 00100000 01110010 01110101 01101110 01110011 00100000 01111001 01101111 01110101"));
