 'use strict'

let ownerage = 24
let username = prompt('whats your name')
username = username.toLowerCase();
//console.log(username)
let profession = prompt( ' welcome ' + username + ' my name is abdalla and i am a pharmasist you what is your profession?')
alert(' you are a ' + profession + ' nice!')
//console.log(profession)
profession = profession.toLowerCase();
let age = prompt ('how old are you?' )
//console.log(age)
if (age > 18 && age <28) { alert (' we are close in age i am ' + ownerage)}
let a = confirm(' doing well ??') 
if (a === true) { alert ('me too am happy with my life ')} else { alert ("am sorry :(")}
alert( 'your name is ' + username + ' and  my name is abdalla' + " your age is  " + age + ' and i am 24' 
+ ' i am a pharmasist and you are a ' + profession 
)


