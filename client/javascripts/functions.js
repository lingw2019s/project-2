// jshint esversion: 6

/* let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
}; */


// Functions in three forms that takes a string and returns a string with words in s reversed.

//arrow function

let revWord1 = s => {
  s = s.split(" ");
  revWord = "";
  for (let i=0; i<s.length; i++){
    let word = s[i].split("");
    let rev="";
    for (let j=word.length-1; j>=0; j--) {
      rev +=word[j];
    }
  revWord += rev;
  if (i<s.length -1 ){
    revWord += " ";
  }
}
  return revWord;
};


//array.forEach

let revWord2 = s => {
  s = s.split(" ");
  revWord = "";
  s.forEach(myfunction);

  function myfunction(item, index, array){
    let revItem ="";
    for (let j = item.length-1; j>=0; j--) {
      revItem += item.charAt(j);
    }
    revWord += revItem;
    if (index<array.length -1 ){
      revWord += " ";
    }
  }
  return revWord;
};


//for of loop
let revWord3 = s => {
  s = s.split(" ");
  revWord = "";
  for (let item of s) {
    let word = item.split("");
    let rev="";
    for (let j=word.length-1; j>=0; j--) {
      rev += word[j];
    }
    revWord += rev + " ";
  }
  return revWord.substr(0, revWord.length-1);
};
