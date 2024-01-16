export function validateEmail(email) {
  const emailRegex = /([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/;

  return emailRegex.test(email);
}

export function validatePanNumber(pan) {
  const panNumber = pan.trim().toUpperCase(); // Convert to uppercase and remove leading/trailing spaces
  const regex = /[a-zA-Z]{3}[p-pP-P]{1}[a-zA-Z]{1}\d{4}[a-zA-Z]{1}/;

  return regex.test(panNumber);
}

export function nameValidate(name) {

  if (name.length < 3 || name.length > 40) {
    return false;
  } else {
    return true;
  }
}

export function MonthlyIncome(amount) {
  var regex = /^[0-9]+$/;
  if (amount < 25000) {
    return false;
  } else if (regex.test(amount)) {
    return true;
  } else {
    return false;
  }

}

export function loanAmount(amount) {
  var regex = /^[0-9]+$/;
  if (amount < 5000) {
    return false;
  } else if (regex.test(amount)) {
    return true;
  } else {
    return false;
  }

}

export function validateMobileNumber(number) {
  var regex = /^[6-9]{1}[0-9]{9}$/;
  return regex.test(number);
}



