import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['their', 'her', 'my', 'his'];
let adjective = ['pink', 'sparkly', 'small', 'cool'];
let noun = ['lantern', 'glacier', 'melody', 'compass'];
let extension = ['com', 'io', 'biz', 'store'];

let domainNamesArray = [];
let domainCk, extLen; 

for (i = 0; i < pronoun.length; i++) {
    for (j = 0; j < adjective.length; j++) {
        for (k = 0; k < noun.length; k++) {
            for (l = 0; l < extension.length; l++) {
            }
        }
    }
}

    

extLen = extension[l].length;
extLen = noun[k].slice(-1*extLen);

if(domainCk === extension[l]){
    domainNamesArray.push(pronoun[i]+adjective[j]+noun[k].slice(0,(-1))*extLen)+'.'+extension[l];
    domainNamesArray.push(pronoun[i]+adjective[j]+noun[k]+'.'+extension[l]);
}
else{
    domainNamesArray.push(pronoun[i]+adjective[j]+noun[k]+extension[l]);
}

const domainNamesArrayShuffled = domainNamesArray.sort((x, y) => 0.5 - Math.random());
document.getElementById("list-of-domains").innerHTML = domainNamesArrayShuffled.join("<br>");
