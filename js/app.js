'use strict'

let ownerage = 24;
let username = prompt('whats your name');
let profession = prompt(' welcome ' + username + ' my name is abdalla and i am a pharmasist you what is your profession?');


function names(username) {
  username = username.toLowerCase();
  console.log(username)
  profession = profession.toLowerCase();
  alert(' you are a ' + profession + ' nice!');
}

names(username);

console.log(profession)



let score = 0;
let age = prompt('how old are you?');

function userAge(age){
  console.log(age);
  if (age > 18 && age < 28) { alert(' we are close in age i am ' + ownerage); }
  let a = prompt(' doing well ??');
  a = a.toLowerCase();
  switch (a) {
  case 'yes': alert('me too am happy with my life ');
    score++;
    break;
  case 'y': alert('me too am happy with my life ');
    score++;
    break;
  case 'no': alert('i am sorry');
    break;
  case 'n': alert('i am sorry');
    break;
  }

}
userAge(age);

let b = prompt(' is my favuorite pet cats ? ');
b = b.toLowerCase();

function userpet(b ){
  console.log(b + ' cats are my favourite');
  switch (b) {
  case 'yes': alert('correct ');
    score++;
    break;
  case 'y': alert('correct ');
    score++;
    break;
  case 'no': alert('nope');
    break;
  case 'n': alert('nope');
    break;
  }
}
userpet(b );



let c = prompt(' is my favuorite instrument piano ? ');
c = c.toLowerCase();
function instruments(c){
  console.log(c + ' piano is my instrument')
  switch (c) {
  case 'yes': alert('correct ');
    score++;
    break;
  case 'y': alert('correct ');
    score++;
    break;
  case 'no': alert('nope');
    break;
  case 'n': alert('nope');
    break;
  }
}
instruments(c);



let d = prompt(' do i love summer ?');
d = d.toLowerCase();
function season(d){
  console.log(d + ' summer is the best');
  switch (d) {
  case 'yes': alert('correct ');
    score++;
    break;
  case 'y': alert('correct ');
    score++;
    break;
  case 'no': alert('nope');
    break;
  case 'n': alert('nope');
    break;
  }
}
season(d);

function sum (alert){

  alert('your name is ' + username + ' and  my name is abdalla' + 'your age is' + age + ' and i am 24'
    + ' i am a pharmasist and you are a ' + profession );
  console.log('mySummary');
  return(alert);

}
sum (alert);



let num = prompt(' guess what is my favurate number from 0 to 10?');
function question6(num ){
  for (var i = 2; i < 5; i++) {

    if (num === '7') {
      alert('correct great job!');
      score++;
      break;
    }
    else if (num === '1' || num === '2' || num === '3' || num === '4') { var num = prompt('you are too low , try again') }
    else if (num === '5' || num === '6' || num === '8' || num === '9') { var num = prompt('you are too close ! try again ') }
    else if (num === '10') { var num = prompt('you are too high, try again') }
  }
  if (i === 5) { alert(' you spent all your chances sorry the correct Answer is 7'); }
  console.log(num +' is my fav number');


}
question6(num );



let color = prompt('what is my favurate color? ', 'red , black ,blue , yellow , white, orange');
let correctcolor = ['white', 'blue', 'red'];
console.log(correctcolor);
function question7(color){
  for (var q = 0; q < 5; q++) {
    if (color === correctcolor[0] || color === correctcolor[1] || color === correctcolor[2]){
      alert('correct , great job !!');
      score++;
      break;
    }

    else { color = prompt('wrong answer try again') }
  }

  if (q === 5) { alert('you spent all your chances sorry , the correct answer was blue or red or white') }
}
question7(color);

function result(alert){
  alert('your score is ' + score + ' outof 6')
  return(alert);
}
result(alert);
