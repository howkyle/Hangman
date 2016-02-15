window.onload= function(){

	var word;
	var wordlist =["guild", "science", "technology", "jamaica", "college", "computer",
					 "university", "west", "indies", "mathematics", "information", "actuarial science", "physics", 
					 "biology", "chemistry", "biochemistry", "programming" ];
	var placeholder;
	var wordlength;
	var chanceCount;

	document.getElementById("submitGuess").addEventListener("click", checkGuess);

	function initialize(){
		word = "tes twordtest worrd2";
		placeholder = "";
		wordlength = word.length;
		chanceCount = 0;

		for(i=0;i<wordlength;i++){
			if (word[i] == " "){
				placeholder+=" ";
			}
			else{
				placeholder +="_";
			}
			
		}

		document.getElementById("wordspace").innerHTML=placeholder;
	}

	function updateHangman(){
		//code to update the visual man hanging in the gallows using pictures
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
			}
		}
		if(found == false){
			chanceCount++;
			updateHangman();
			if(chanceCount==10){
				document.getElementById("screen").innerHTML ="GAME OVER";
				document.getElementById("submitGuess").disabled = true;
			}
		}

		document.getElementById("wordspace").innerHTML=placeholder;
	}

	initialize();
}



