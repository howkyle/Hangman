window.onload= function(){

	var word = "testwordtestworrd2";
	var placeholder = "";
	var wordlength = word.length;

	for(i=0;i<wordlength;i++){
		placeholder +="_ "
	}

	document.getElementById("wordspace").innerHTML=placeholder;

}
