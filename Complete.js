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
        //document.getElementById("savit").remove();
        document.getElementById("author").remove();
        highbox();
        
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