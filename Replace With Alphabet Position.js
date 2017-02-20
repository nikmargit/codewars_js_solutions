function alphabetPosition(text) {
  return text.toLowerCase()
             .split('')
             .filter(letter => letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123)
             .map(letter => letter.charCodeAt(0) - 96)
             .join(' ');
}
