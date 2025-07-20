import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function generateDomains() {
  let domainList = '';
  for (let p of pronoun) {
    for (let a of adjective) {
      for (let n of noun) {
        for (let ext of extension) {
          domainList += `<div>${p}${a}${n}.${ext}</div>`;
        }
      }
    }
  }
  document.getElementById('domains').innerHTML = domainList;
}