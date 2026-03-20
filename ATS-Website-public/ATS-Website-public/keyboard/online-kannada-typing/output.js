//local Storage

("undefined" == typeof window.localStorage || "undefined" == typeof window.sessionStorage) && function() {
	function e(f) {
		function e(a) {
			var b;
			b = new Date;
			b.setTime(b.getTime() + 31536E6);
			document.cookie = "localStorage=" +a + ("; expires=" + b.toGMTString()) + "; path=/"
		}
		
		function g(a) {
			a = JSON.stringify(a);
			"session" == f?window.name = a: e(a)
		}
		
		var d = function () {
			var a;
			if ("session" == f)a = window.name;
			else a: {
				a = document.cookie.split(";");
				var b,
				c;
				for (b = 0; b < a.length; b++) {
					for (c = a[b];
					" " == c.charAt(0);
					)c = c.substring(1, c.length);
					if (0 == c.indexOf("localStorage=")) {
						a = c.substring(13, c.length);
						break a
					}
				}
				
				a = null
			}
			
			return a?JSON.parse(a):{}
		}
		
		();
		return {
			length: 0,
			clear: function () {
				d = {};
				
				this.length = 0;
				"session" == f?window.name = "": e("")
			},
				getItem: function (a) {
				return void 0 === d[a]?null:d[a]
			},
				key: function (a) {
				var b = 0, c;
				for (c in d) {
					if (b == a)return c;
					b++
				}
				
				return null
			},
				removeItem: function (a) {
				delete d[a];
				this.length--;
				g(d)
			},
				setItem: function (a, b) {
				d[a] =b + "";
				this.length++;
				g(d)
			}
		}
	}
	
	if ("undefined" == typeof window.localStorage)window.localStorage = new e("local");
	if ("undefined" == typeof window.sessionStorage)window.sessionStorage = new e("session")
}

();
/* the code */
	var n = document.getElementById("aksharasirionline");
/* save */
	var s = function () {
	localStorage.setItem("aksharasirionline", n.value);
}

/* retrieve (only on page load) */
	if (window.localStorage) {
	n.value = localStorage.getItem("aksharasirionline");
}

/* autosave onchange and every 500ms and when you close the window */
	n.onchange = s();
setInterval(s, 500);
window.onunload = s();

//Local Storage End

	

 function saveTextAsFile()
  {
    var textToSave = document.getElementById("aksharasirionline").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "AksharaSiri-Online-Typing.txt";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
   downloadLink.click();
  }
function destroyClickedElement(event)
  {
    document.body.removeChild(event.target);
  }

	
	
	
//Whatsapp Share
	

		function new_share()
{
    var whatsapp_content = document.getElementById("aksharasirionline").value;
    if(whatsapp_content!=='')
    {
       whatsapp_link = ' -Sent via aksharatypestudio.in';

      var url = "https://web.whatsapp.com/send?text="+ whatsapp_content + whatsapp_link;
      document.getElementById('whatsapp_link').setAttribute("href",url);
     }
} 
		
//Whatsapp Share End
	
	
//Email Start	

function sendEmail() {
  var email = "";
  var subject = "Akshara Type Studio";
  var body = "Others" ? document.getElementById("aksharasirionline").value : variableList;
  window.location = "mailto:" + email + "?subject=" + subject + "&body=" + body;
}

	
//Email End


	  
function printTextArea()
  {
    var printtext = document.aksharasirionline;
    childWindow = window.open('','childWindow','location=yes, menubar=yes, toolbar=yes,');
    childWindow.document.open();
    childWindow.document.write('<html><head></head><body>');
    childWindow.document.write(document.getElementById('aksharasirionline').value.replace(/\n/gi,'<br>'));
	childWindow.document.write('</body></html><p><small><i>This document was printed from Akshara Type Studio, Akshara Siri Online Kannada Typing.');
    childWindow.print();
    childWindow.document.close();
    childWindow.close();
  }



function clearContent()
{
    document.getElementById("aksharasirionline").value='';
}

function copy() {
  let textarea = document.getElementById("aksharasirionline");
  textarea.select();
  document.execCommand("copy");
}
