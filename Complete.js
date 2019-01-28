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
     function showAlert(){
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

function Backg(){
var pattern = Trianglify({
                width: window.innerWidth,
                height: window.innerHeight
        });

document.getElementById('author').style.background = 'url(' + pattern.canvas().toDataURL() + ')'; 
}
