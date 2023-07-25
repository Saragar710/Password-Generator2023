var characterLength=10;
var upperCase ="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var lowerCase ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var number = "1,2,3,4,5,6,7,8,9,0";
var specialCharacter ="!,@,#,$,%,^,&,*,(,),?,/,";
var allChar ="upperCase + lowerCase + number + specialCharacter";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

// Write password to the #password input
function writePassword () {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");


  if(correctPrompts){
  var password = generatePassword();
  

  passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}
 
 function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++){
    var randomLetter = Math.floor(Math.random() * allChar.length)
    password = password + allChar[randomLetter]
  }
  return password;
 }

 function getPrompts() {
   allChar = "";
   characterLength = parseInt(prompt("How many characters do you want your password to be? (10 - 128 characters"));

   if (isNaN(characterLength) || characterLength < 10 || characterLength > 128) {
    alert("Please try again. Character length must be a number");
    return false;
   }
 
    if (confirm("Do you want to use uppercase letters in your password?")){
        allChar = allChar.concat("upperCase");
    }
    if (confirm("Do you want to use lowerCase letters in your password?")) {
        allChar = allChar.concat("lowerCase");
    }
    if (confirm("Do you want to use any numbers in your password?")) {
        allChar = allChar.concat("number");
    }  
    if (confirm("Do you want to use any special characters in your password?")) {
        allChar = allChar.concat("specialCharacters");
    }
    return true;
  }
