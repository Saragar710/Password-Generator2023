// Assignment Code
var generateBtn = document.querySelector("#generate");
var length=10;
var upperCase ="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var lowerCase ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var numbers = "1,2,3,4,5,6,7,8,9,0";
var specialCharacters ="!,@,#,$,%,^,&,*,(,),?,/,";
var allChar ="upperCase, lowerCase, numbers, specialCharacters";
var length = 10;


// function generatePassword() {
//   console.log("Thanks for clicking the button!")
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword("8") {
  function let(password) += " ";
  function let(password) += ("upperCase(Math.floor(Math.random)()*[upperCase.length]");
  function let(password) += ("lowerCase(Math.floor(Math.random)()*[lowerCase.length]");
  function let(password) += ("numbers(Math.floor(Math.random)*[numbers.length]");
  function let(password) += ("specialCharacters(Math.floor(Math.random)*[specialCharacters]");

  while(length > password.length){
    password + allChar[Math.floor(Math.random()*allChar.length)]
  }


  }
    var password = 
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);