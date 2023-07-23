// Assignment Code
var generateBtn = document.querySelector("#generate");
var length=10;
var upperCase ="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var lowerCase ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var number = "1,2,3,4,5,6,7,8,9,0";
var specialCharacter ="!,@,#,$,%,^,&,*,(,),?,/,";
var allChar ="upperCase + lowerCase + number + specialCharacter";
var length = 10;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
  function let(password) {("password")};
  function let(password)  {("upperCase(Math.floor(Math.random)()*[upperCase.length]")};
  function let(password) {("lowerCase(Math.floor(Math.random)()*[lowerCase.length]")};
  function let(password)  {("number(Math.floor(Math.random)*[numbers.length]")};
  function let(password)  {("specialCharacter(Math.floor(Math.random)*[specialCharacters]")};
      // console.log(Math.floor(Math.random() *10);
      var generatePassword = lowerCase + upperCase + number + specialCharacter



  while(length > writePassword.length) 
    password += allChar[Math.floor(Math.random()*allChar.length)];
  
  generatePassword.valueOf = password;
  
  //  for(var i=0; i <passwordLength. i ++;) {
  //   var randomPassword = Math.floor(Math.random() * collectAllCharacters.length);
  //   password += collectAllCharacters.CharAt(randomPassword);


  //  }

  }
    // var password = 
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("click", writePassword);