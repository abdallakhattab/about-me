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
a= a.toLowerCase()
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
 let b = prompt(' is my favuorite pet cats ? ')
 b=b.toLowerCase()
switch  (b) { 
    case 'yes' :alert ('correct ')
    break;
    case 'y' : alert ('correct ')
    break;
    case 'no' : alert("nope")
    break;
    case 'n' : alert("nope")
    break;}
    let c= prompt(' is my favuorite instrument piano ? ')
   c=c.toLowerCase()
switch  (c) { 
    case 'yes' :alert ('correct ')
    break ;
    case 'y' : alert ('correct ')
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
        break;
        case 'y' : alert ('correct ')
        break;
        case 'no' : alert("nope")
        break;
        case 'n' : alert("nope")
        break;}

alert( 'your name is ' + username + ' and  my name is abdalla' + " your age is  " + age + ' and i am 24' 
+ ' i am a pharmasist and you are a ' + profession 
)


