function calculateInsurance() {

	var h = document.getElementById('inputHorsepower').value;
	var a = document.getElementById('inputAge').value;
	var n = document.getElementById('inputName').value;

	var result = ((h*100)/a)+50;

	document.getElementById("result").value=result;
	alert "result";


}
