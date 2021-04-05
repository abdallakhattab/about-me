 'use strict'

let ownerage = 24
let username = prompt('whats your name')
username = username.toLowerCase();
//console.log(username)
let profession = prompt( ' welcome ' + username + ' my name is abdalla and i am a pharmasist you what is your profession?')
profession = profession.toLowerCase();
alert(' you are a ' + profession + ' nice!')
//console.log(profession)

let age = prompt ('how old are you?' )
//console.log(age)
if (age > 18 && age <28) { alert (' we are close in age i am ' + ownerage)}
let a = prompt(' doing well ??') 
switch  (a) { 
   case 'yes' :alert ('me too am happy with my life ')
   break;
   case 'y' : alert ('me too am happy with my life ')
   break;
   case 'no' : alert("i am sorry")
   break;
   case 'n' : alert("i am sorry")
   break;
}
 let b = prompt(' what is my favuorite pet cats or dogs ? ')
switch  (b) { 
    case 'cats' :alert ('correct ')
    break;
    case 'dogs' : alert("nope")
    break;}
    let c= prompt(' what is my favuorite instrument , ney or piano ? ')
switch  (c) { 
    case 'ney' :alert ('correct ')
    break;
    case 'piano' : alert("nope")
    }
let d = prompt(' do i love summer or winter ?')
    switch  (d) { 
        case 'summer' :alert ('correct ')
        break;
        case 'winter' : alert("nope")
        break;}

alert( 'your name is ' + username + ' and  my name is abdalla' + " your age is  " + age + ' and i am 24' 
+ ' i am a pharmasist and you are a ' + profession 
)


