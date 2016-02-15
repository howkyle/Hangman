window.onload= function(){

	var word = "testwordtestworrd2";
	var placeholder = "";
	var wordlength = word.length;

	document.getElementById("submitGuess").addEventListener("click", checkGuess);

	for(i=0;i<wordlength;i++){
		placeholder +="_"
	}

	document.getElementById("wordspace").innerHTML=placeholder;

	function checkGuess(){
		var indices=[];
		letter = document.getElementById("letterGuess").value;
		for(i=0;i<wordlength;i++){
			if(word[i]==letter){
				indices.push(i);
				temp = placeholder.split("");
				temp[i]=letter;
				placeholder=temp.join("");
				console.log(placeholder);
			}
		}

		document.getElementById("wordspace").innerHTML=placeholder;
		console.log("done")

	}
}



