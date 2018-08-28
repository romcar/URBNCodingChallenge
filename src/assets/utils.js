export default {

  convertSpecialCharsToString: (string) => {
    let newString = string;
    newString = newString.replace(/&quot;/ig, '"');
    newString = newString.replace(/&lt;/ig, '<');
    newString = newString.replace(/&gt;/ig, '>');
    newString = newString.replace(/&amp;/ig, '&');
    newString = newString.replace(/&#039;/ig, "'");
    return newString;
  },
};

