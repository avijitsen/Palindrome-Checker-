function palindrome(str) {
    // Good luck!
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var spliting=lowRegStr.split("");
    var reversing=spliting.reverse();
    var joining=reversing.join("");
    if(joining==lowRegStr){
    return true;
    }
    return false;
  }
  
  
  
  palindrome("eye");