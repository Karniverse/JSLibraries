window.onload=function (){
var newdiv=document.createElement("div");
newdiv.id="author"
newdiv.setAttribute("style", "text-align:center");
document.body.appendChild(newdiv);

var newdiv1=document.createElement("div");
newdiv1.id="output"
document.body.appendChild(newdiv1);

var headin=document.createElement("h1");
headin.innerText="Document Highlighter"
document.getElementById("author").appendChild(headin);
var author=document.createElement("h3");
author.innerText="Author: Karmukilan"
document.getElementById("author").appendChild(author);

  document.getElementById('author').innerHTML=document.getElementById('author').innerHTML+"<input type=\"file\" onchange=handleFileSelect(this)>"
/*  var filei=document.createElement("input");
filei.type="file"
//filei.onchange="handleFileSelect(this)"
document.getElementById("author").appendChild(filei);
  document.getElementById("author").addEventListener("change", function() {handleFileSelect(this)}, false);*/
}
