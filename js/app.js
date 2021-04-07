 'use strict'

let ownerage = 24
let username = prompt('whats your name')
username = username.toLowerCase();

//console.log(username)
let profession = prompt( ' welcome ' + username + ' my name is abdalla and i am a pharmasist you what is your profession?')
profession = profession.toLowerCase();
alert(' you are a ' + profession + ' nice!')

//console.log(profession)
let score = 0
let age = prompt ('how old are you?' )
//console.log(age)
if (age > 18 && age <28) { alert (' we are close in age i am ' + ownerage)}
let a = prompt(' doing well ??') 
a= a.toLowerCase()
switch  (a) { 
   case 'yes' :alert ('me too am happy with my life ')
   score++
   break;
   case 'y' : alert ('me too am happy with my life ')
   score++
   break;
   case 'no' : alert("i am sorry")
   break;
   case 'n' : alert("i am sorry")
   break;
}
 let b = prompt(' is my favuorite pet cats ? ')
 b=b.toLowerCase()
switch  (b) { 
    case 'yes' :alert ('correct ')
    score++
    break;
    case 'y' : alert ('correct ')
    score++
    break;
    case 'no' : alert("nope")
    break;
    case 'n' : alert("nope")
    break;}
    let c= prompt(' is my favuorite instrument piano ? ')
   c=c.toLowerCase()
switch  (c) { 
    case 'yes' :alert ('correct ')
    score++
    break ;
    case 'y' : alert ('correct ')
    score++
    break;
    case 'no' : alert("nope")
    break ;
    case 'n' : alert("nope")
    break;
    }
let d = prompt(' do i love summer ?')
d = d.toLowerCase()
    switch  (d) { 
        case 'yes' :alert ('correct ')
        score++
        break;
        case 'y' : alert ('correct ')
        score++
        break;
        case 'no' : alert("nope")
        break;
        case 'n' : alert("nope")
        break;}

alert( 'your name is ' + username + ' and  my name is abdalla' + " your age is  " + age + ' and i am 24' 
+ ' i am a pharmasist and you are a ' + profession 
)
 var num = prompt(' guess what is my favurate number from 0 to 10?');
 
 for (var i= 2 ; i <5  ; i++){
   
if ( num === '7' ) {alert('correct great job!'); 
score++; 
break;}
else if (num === '1' || num === '2' || num === '3' || num === '4' ) {var num = prompt('you are too low , try again')} 
else if (num === '5'|| num === '6' || num === '8' || num === '9') {var num = prompt ('you are too close ! try again ')}
else if (num === '10'){ var num = prompt('you are too high, try again')}
}
if (i === 5){alert(' you spent all your chances sorry the correct Answer is 7')}
console.log(i);
 var color = prompt('what is my favurate color? ' , 'red , black ,blue , yellow , white, orange')
 var correctcolor = ['white' ,'blue' ,'red'];
 console.log(correctcolor);
 for (var q= 0 ; q <5  ; q++){
 if (color === correctcolor[0] || color === correctcolor[1] || color === correctcolor[2]) {
alert('correct , great job !!') ;
score++;
break;}
 
else {color =prompt('wrong answer try again')}
 }
 
 if (q === 5){alert('you spent all your chances sorry , the correct answer was blue or red or white')}
 
alert('your score is ' + score + ' outof 6')