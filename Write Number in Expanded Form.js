function expandedForm(num) {
  num = num.toString().split('');
  var counter = 0;

  for(x = num.length - 1; x >= 0; x--) {
    num[counter] += '0'.repeat(x);
    counter++;
  }
  return num.filter(x => x > 0).join(' + ');
}
