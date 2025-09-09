function fetchLocal(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest
        xhr.onload = function () {
            resolve(new Response(xhr.response, { status: xhr.status }))
        }
        xhr.onerror = function () {
            reject(new TypeError('Local request failed'))
        }
        xhr.open('GET', url)
        xhr.responseType = "arraybuffer";
        xhr.send(null)
    })
}

var voices = window.speechSynthesis.getVoices();
setTimeout(function() { voices = window.speechSynthesis.getVoices(); }, 1000);

function findVoice(lang) {        
	for (var i = 0; i < voices.length; i++) {
		if (voices[i].lang === lang) { return voices[i]; }
	}
	return null;
}

this.speak = function(s) {
	if (!window.speechSynthesis) { return; }
	var utterance = new SpeechSynthesisUtterance(s);        
	utterance.lang = "ru-RU";
	utterance.voice = findVoice(utterance.lang);
	window.speechSynthesis.speak(utterance);
};
	
	
var global_vars_email = null;
var global_vars_mobile = null; 	
	 
window.addEventListener("load", function(){
	
	
	 fetch('data/credentials.json')
     .then(res => res.json())
     .then((out) => { 
		global_vars_email = out.email;
		global_vars_mobile = out.mobile; 

	})
	.catch(err => console.error(err));

	document.getElementById("en_mobile").onclick = function(){
        navigator.clipboard.writeText(global_vars_mobile);
	    alert("Copied");// the text: " + copyTextValue);
		//voicestart("+ 3 8 0 9 5 4 4 4 3 6 1 8 ");
	}
	
	document.getElementById("en_mobile").oncontextmenu = function(){
        navigator.clipboard.writeText(global_vars_mobile);
	    alert("Copied");// the text: " + copyTextValue);
		//voicestart("+ 3 8 0 9 5 4 4 4 3 6 1 8 ");
	}
	
	document.getElementById("mobile").oncontextmenu = function(){
        navigator.clipboard.writeText(global_vars_mobile);
	    alert("Copied");// the text: " + copyTextValue);
		//voicestart("+ 3 8 0 9 5 4 4 4 3 6 1 8 ");
		return false;
	}
	
	document.getElementById("mobile").onclick = function(){
        navigator.clipboard.writeText(global_vars_mobile);
	    alert("Copied");// the text: " + copyTextValue);
		//voicestart("+ 3 8 0 9 5 4 4 4 3 6 1 8 ");
		return false;
	}
	
	document.getElementById("email").onclick = function(){
		navigator.clipboard.writeText(global_vars_email);
        /* Alert the copied text */
		alert("Copied");
	}
	
	document.getElementById("en_email").onclick = function(){
		navigator.clipboard.writeText(global_vars_email);
        /* Alert the copied text */
		alert("Copied");
	
	}
	
	document.getElementById("email").oncontextmenu = function(){
		navigator.clipboard.writeText(global_vars_email);
        /* Alert the copied text */
		alert("Copied");
	}
	
	document.getElementById("en_email").oncontextmenu = function(){
		navigator.clipboard.writeText(global_vars_email);
        /* Alert the copied text */
		alert("Copied");
	
	}
	 
    const selector = document.getElementById("selector");
    const div1 = document.getElementById("uk_version");
    const div2 = document.getElementById("en_version");
	div2.classList.add("hidden");

    selector.addEventListener("change", function() {
      // Спочатку ховаємо обидва
      div1.classList.add("hidden");
      div2.classList.add("hidden");

      // Показуємо потрібний
      if (this.value === "uk_version") {
        div1.classList.remove("hidden");
      } else if (this.value === "en_version") {
        div2.classList.remove("hidden");
      }
    });
  
	
}); 

var global_n=1;
function voicestart(s) {
		  
	if(window.speechSynthesis !== undefined){ 
		console.log('Чтение речи поддерживается в данном браузере'); 
		var msg = new SpeechSynthesisUtterance();

		var voices = window.speechSynthesis.getVoices();
		msg.voice = voices[global_n];  // Note: some voices don't support altering params
		msg.volume = 1; // 0 to 1
		msg.rate = 1; // 0.1 to 10
		msg.pitch = 2; //0 to 2
		msg.text = s;
		msg.lang = 'ru-RU';
		msg.onend = function(e) {
			console.log('Finished in ' + event.elapsedTime + ' seconds.');
		};
		
		speechSynthesis.speak(msg);
	
	}
	else
	{ 
		console.log('Чтение речи не поддерживается ');
	}
		  
}		  

