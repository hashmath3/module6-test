function validate() {
	let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
    let numberInput = document.getElementById('phone-number').value
	let batchInput = document.getElementById('batch-no').value
	let moduleInput = document.getElementById('current-module').value
	
	let tnCInput = document.getElementById('tnC').checked

	let error = false
    var regEx = /^[A-zA-Z]+$/;

	if(firstNameInput && firstNameInput.length  >=3  && firstNameInput.match(regEx)){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}

	if(lastNameInput && lastNameInput.length >=3 && lastNameInput.match(regEx)){
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
	}

	if (
    emailInput &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
		emailInput.indexOf('@') !== 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
		error = true
  }

	

	if(numberInput && numberInput.length === 10 && parseInt(numberInput)) {
		document.getElementById("number-valid").style.display = "block";
		document.getElementById("number-invalid").style.display = "none";
	} else {
		document.getElementById("number-invalid").style.display = "block";
		document.getElementById("number-valid").style.display = "none";
		error = true
	}

	if(batchInput !== 'None'){
		document.getElementById('batch-valid').style.display = "block";
		document.getElementById('batch-invalid').style.display = "none";
	} else {
		document.getElementById('batch-invalid').style.display = "block";
		document.getElementById('batch-valid').style.display = "none";
		error = true
	}
    if(moduleInput !== 'None'){
		document.getElementById('module-valid').style.display = "block";
		document.getElementById('module-invalid').style.display = "none";
	} else {
		document.getElementById('module-invalid').style.display = "block";
		document.getElementById('module-valid').style.display = "none";
		error = true
	}

	if(tnCInput) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true
	}

	if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('phone-number').value = ''
		document.getElementById('batch-no').value = 'None'
		document.getElementById('current-module').value = 'None'
		document.getElementById('tnC').checked = false

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("module-valid").style.display = "none";
		document.getElementById("number-valid").style.display = "none";
		document.getElementById('batch-valid').style.display = "none";
	}
}