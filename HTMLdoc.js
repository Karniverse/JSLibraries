window.onload=function (){
  
var a1 = document.createElement('script');
a1.src = "https://raw.githack.com/mukil-bluerider/JSLibraries/master/jquery.js";
document.getElementsByTagName('head')[0].appendChild(a1);
  
var pdfi = document.createElement('script');
pdfi.src = "https://raw.githack.com/mukil-bluerider/JSLibraries/master/pdf.js";
document.getElementsByTagName('head')[0].appendChild(pdfi);

var tessa = document.createElement('script');
tessa.src = "https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/1.0.13/tesseract.min.js";
document.getElementsByTagName('head')[0].appendChild(tessa);
  
var a2 = document.createElement('script');
a2.src = "https://raw.githack.com/mukil-bluerider/JSLibraries/master/Complete.js";
document.getElementsByTagName('head')[0].appendChild(a2);
  
var a3 = document.createElement('script');
a3.src = "https://raw.githack.com/mukil-bluerider/JSLibraries/master/FileSaver.js";
document.getElementsByTagName('head')[0].appendChild(a3);

var a4 = document.createElement('script');
a4.src = "https://raw.githack.com/mukil-bluerider/JSLibraries/master/html-docx.js";
document.getElementsByTagName('head')[0].appendChild(a4);
  
var a5 = document.createElement('script');
a5.src = "https://raw.githack.com/mukil-bluerider/JSLibraries/master/mammoth.js";
document.getElementsByTagName('head')[0].appendChild(a5); 
  
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
