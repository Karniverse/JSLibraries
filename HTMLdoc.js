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
  
var a5 = document.createElement('script');
a5.src = "https://raw.githack.com/mukil-bluerider/JSLibraries/master/Snow.js";
document.getElementsByTagName('head')[0].appendChild(a5); 
  
var sty = document.createElement('link');
sty.rel="stylesheet"
sty.type="text/css"
sty.href = "https://raw.githack.com/mukil-bluerider/JSLibraries/master/Style.css";
document.getElementsByTagName('head')[0].appendChild(sty);
  
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

var newdiv3=document.createElement("div");
newdiv3.id="ocr"
document.getElementById("author").appendChild(newdiv3);

var pdft=document.createElement("h1");
pdft.innerText="PDF OCR"
document.getElementById("ocr").appendChild(pdft);

document.getElementById('ocr').innerHTML=document.getElementById('ocr').innerHTML+"<input type=\"file\" onchange=pdfocr(this)>"+"<input type=\"button\" value=\"Analyse\" onclick=recog()>"+"<input type=\"button\" value=\"SaveDocx\" onclick=saveocr()>"


/*var pdfin=document.createElement("input");
pdfin.type='file'
pdfin.id="pdfin"
//pdfin.addEventListener("onchange", pdfocr , false);
document.getElementById("ocr").appendChild(pdfin);*/

/*var newdiv2=document.createElement("canvas");
newdiv2.id="canvasele"
newdiv2.width=window.innerWidth
newdiv2.height=3508
document.getElementById("ocr").appendChild(newdiv2);*/




/*  var filei=document.createElement("input");
filei.type="file"
//filei.onchange="handleFileSelect(this)"
document.getElementById("author").appendChild(filei);
  document.getElementById("author").addEventListener("change", function() {handleFileSelect(this)}, false);*/
}

/*references
http://usefulangle.com/post/20/pdfjs-tutorial-1-preview-pdf-during-upload-wih-next-prev-buttons
http://usefulangle.com/post/24/pdf-to-jpeg-png-with-pdfjs
https://github.com/naptha/tesseract.js#tesseractjs
https://gist.github.com/dmnsgn/36b26dfcd7695d02de77f5342b0979c7

*/

