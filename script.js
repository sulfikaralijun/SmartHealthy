function handleGetFormData(){
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return {
        name,
        city,
        email,
        zipCode,
        status
    };
}

function isNumber(string) {
    return !isNaN(string)
}

function checkboxIsChecked() {
    const checkbox = document.getElementById('status');
    return checkbox.checked;
}

function validateFormData(objek) {
    if (objek && isNumber(objek.zipCode) && checkboxIsChecked()) {
        return true;
    }
    return false;
}


function submit() {

    const formData = handleGetFormData();

    const isValid = validateFormData(formData); 

    const warningDiv = document.getElementById('warning'); 

    if (!isValid) {
        warningDiv.textContent = 'Periksa form anda sekali lagi';
    } else {
        warningDiv.textContent = ''; 
    }
}

const form = document.getElementById('submit-form')
form.addEventListener('click', submit);