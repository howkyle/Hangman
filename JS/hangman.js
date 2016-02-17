window.onload= function(){

	var word;
	var wordlist =["guild", "science", "technology", "jamaica", "college", "computer",
					 "university", "west", "indies", "mathematics", "information", "actuarial science", "physics", 
					 "biology", "chemistry", "biochemistry", "programming", "hello world" , "python", "java", "induction",
					  "recursion", "control structures"];
	var placeholder;
	var wordlength;
	var chanceCount;
	var canvas = document.getElementById("screen");
	var gallowImg = new Image();

	document.getElementById("submitGuess").addEventListener("click", checkGuess);
	document.getElementById("refresh").addEventListener("click", initialize);

	function initialize(){

		gallowImg.src = "images/initial.jpg";
		canvas.appendChild(gallowImg);

		pick = Math.floor((Math.random() * wordlist.length) + 1);
		word = wordlist[pick];
		console.log(word);
		placeholder = "";
		wordlength = word.length;
		chanceCount = 0;
		document.getElementById("wrongGuesses").innerHTML="";
		document.getElementById("submitGuess").disabled = false;
		document.getElementById("letterGuess").disabled = false;


		for(i=0;i<wordlength;i++){
			if (word[i] == " "){
				placeholder+=" ";
			}
			else{
				placeholder +="_";
			}
			
		}


		document.getElementById("wordspace").innerHTML=placeholder;
		document.getElementById("letterGuess").focus();
		document.getElementById("letterGuess").onkeypress = function khandle(e){
			if(e.keyCode == 13){
				checkGuess();
			}
		}
	}

	function updateHangman(){
		//code to update the visual man hanging in the gallows using pictures
		
		gallowImg.src = "images/"+chanceCount+".jpg";
		if(chanceCount==10){
				document.getElementById("submitGuess").disabled = true;
				document.getElementById("letterGuess").disabled = true;
		}
	}

	function checkGuess(){
		var indices=[];
		var found = false;
		letter = document.getElementById("letterGuess").value;
		for(i=0;i<wordlength;i++){
			if(word[i]==letter){
				indices.push(i);
				temp = placeholder.split("");
				temp[i]=letter;
				placeholder=temp.join("");
				console.log(placeholder);
				found = true;
				if(placeholder.search("_") == -1){
					document.getElementById("submitGuess").disabled = true;
					document.getElementById("letterGuess").disabled = true;
					gallowImg.src = "images/win.jpg";
				}
			}
		}
		if(found == false && letter){
			chanceCount++;
			document.getElementById("wrongGuesses").innerHTML+=letter;
			updateHangman();
		}
		document.getElementById("letterGuess").value="";
		document.getElementById("letterGuess").focus();

		document.getElementById("wordspace").innerHTML=placeholder;
	}

	initialize();
}



