    function handleFileSelect(event) {
        readFileInputEventAsArrayBuffer(event, function(arrayBuffer) {
            mammoth.convertToHtml({arrayBuffer: arrayBuffer}).then(displayResult).done();
        });
    }

    function readFileInputEventAsArrayBuffer(event, callback) {
        var file = event.files[0];

        var reader = new FileReader();
        
        reader.onload = function(loadEvent) {
            var arrayBuffer = loadEvent.target.result;
            callback(arrayBuffer);
        };
        
        reader.readAsArrayBuffer(file);
    }


    function displayResult(result) {
        document.getElementById("output").innerHTML = result.value;
        document.getElementById("author").remove();
        //document.getElementById("ocr").remove();
        //document.getElementById("canvasele").remove();
        highbox();
        
     }

    function pdfocr(uh){
      PDFJS.getDocument({ url: URL.createObjectURL(uh.files[0]) }).then(function(pdf_doc) {
      for (var p = 1; p <= pdf_doc.numPages; p++) {
       //createcanvas(p);
      pdf_doc.getPage(p).then(function(page) {
       var scale_required =   window.innerWidth / page.getViewport(1).width
       var viewport = page.getViewport(scale_required);
      var canvas=document.createElement("canvas");
      canvas.style.display="block"
      canvas.width=window.innerWidth
      canvas.height=page.getViewport(3).height
      var context=canvas.getContext('2d')
      var renderContext = {canvasContext: context,viewport: viewport};
      page.render(renderContext)
      document.getElementById("ocr").appendChild(canvas);}
      );}});}


    
    function ocr(){
      recog();
      //saveocr();
         }

    function recog(){
	    document.getElementsByTagName('h3')[0].remove();
      ocrtext='';
      var ocpage=document.getElementsByTagName('canvas')
      for (var oc = 0; oc <=ocpage.length ; oc++) {
      Tesseract.recognize(ocpage[oc].toDataURL()).progress(function (p) { console.log('progress', p)
        document.getElementsByTagName('input')[2].value=(p.progress*100).toFixed(2)+'%'})
       .then(function (result) { console.log('result', result.text)
      ocrtext+=result.text.trim()+'\n'+''
      })
      }
      //var converted = htmlDocx.asBlob(ocrtext.trim().replace('\n',"<br>"));
      //saveAs(converted, ocrtext.trim().split('\n')[0]+'.docx');
      //saveocr()
    }
    function saveocr(){
      ocrtext=ocrtext.replace(/Note: This is a converted Word document. An image of the resume is displayed rather than text./g,'').replace(/Note: This is a converted Word document, An image of the resume is displayed rather than text./g,'')  
      var converted = htmlDocx.asBlob("<head><meta charset=\"UTF-8\"></head>"+ocrtext.trim().replace(/\n/g,"<br>"));
      saveAs(converted, document.getElementsByTagName('input')[1].files[0].name.replace('.pdf','')+'.docx');
    }



    function highbox(){
     	var input=document.createElement("input");
        input.type="button";
        input.value="HighlightAll";
        input.id="buto"
        input.onclick = showAlert;
        input.setAttribute("style", "font-size:18px;position:fixed;top:160px;right:100px;");
        document.getElementById("output").appendChild(input);
		var txtar=document.createElement("textarea");
		txtar.type = "text"
		txtar.id="linksar"
		txtar.setAttribute("style", "font-size:18px;position:fixed;top:200px;right:40px;height:250px;");
		document.body.appendChild(txtar);
     }
     /*function showAlert(){
	var kywrd=document.getElementById("linksar").value.split('\n');
		document.designMode = "on"
		for (var i = 0; i < kywrd.length; i++) {
		var keyw=new RegExp(kywrd[i],'gi');
		var wdln=document.body.innerText.match(keyw);
		if (wdln == null){
	}
		else{
		for (var k = 0; k < wdln.length; k++) {
		window.find(kywrd[i]);
		document.execCommand('hiliteColor', false, 'yellow');
	}
	}
	}
		var allbd=document.getElementsByTagName("span");
		for (var z = 0; z < allbd.length; z++) {
		if(allbd[z].style.backgroundColor=="yellow"){
		allbd[z].style.fontWeight='bold'
	}
	}
  		document.designMode = "off"
  		document.getElementById("linksar").remove();
  		document.getElementById("buto").remove();
  		//savdocx('Section0');
  		var converted = htmlDocx.asBlob(document.documentElement.innerHTML);
  		saveAs(converted, document.body.innerText.split('\n')[0]+'.docx');
}
*/

function showAlert(){
     kywrd=document.getElementById("linksar").value.split('\n');
    for (i = 0; i < kywrd.length; i++) {

      $("body").mark(kywrd[i], {
        "element": "span"
      });
      //$("body").mark(kywrd[i]);
  }
    var allbd=document.getElementsByTagName("span");
    for (var z = 0; z < allbd.length; z++) {
    allbd[z].style.fontWeight='bold'
    allbd[z].style.backgroundColor="yellow"

}
      document.getElementById("linksar").remove();
      document.getElementById("buto").remove();
      var converted = htmlDocx.asBlob(document.documentElement.innerHTML);
      saveAs(converted, document.body.innerText.split('\n')[0]+'.docx');

}


/*function Backg(){
var pattern = Trianglify({
                width: window.innerWidth,
                height: window.innerHeight
        });

document.getElementById('author').style.background = 'url(' + pattern.canvas().toDataURL() + ')'; 
}

setTimeout(Backg, 1000);

function foote(){var typeWriting = new TypeWriting({
    targetElement   : document.getElementsByTagName('h3')[0],
    inputString     : 'This page is developed and maintained by Karmukilan',
    typing_interval : 130, // Interval between each character
    blink_interval  : '0.8s', // Interval of the cursor blinks
    cursor_color    : '#00fd55', // Color of the cursor
    });}
foote();


var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('body').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);*/

