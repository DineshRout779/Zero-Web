const btn = document.getElementById('btn');
const resetBtn = document.getElementById('btn-reset');
const result = document.getElementById('result');
const err = document.getElementById('err');

function calculateAge() {
  const dobInputValue = document.getElementById('dob').value;

  console.log(dobInputValue);

  if (dobInputValue === '') {
    err.innerHTML = 'Please enter a valid date';

    // clear result
    result.innerHTML = '';
  } else {
    // clear input
    err.innerHTML = '';
    const dob = new Date(dobInputValue);
    const today = new Date();

    let yearAge = today.getFullYear() - dob.getFullYear();
    let monthAge, dayAge;

    // month diff
    if (today.getMonth() >= dob.getMonth) {
      monthAge = today.getMonth() - dob.getMonth();
    } else {
      yearAge = yearAge - 1;
      monthAge = 12 + today.getMonth() - dob.getMonth();
    }

    // days diff
    if (today.getDate() >= dob.getDate()) {
      dayAge = today.getDate() - dob.getDate();
    } else {
      dayAge = 31 - (dob.getDate() - today.getDate());
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    console.log(yearAge, monthAge, dayAge);

    result.innerHTML = `
    Your <strong>age</strong> is <strong>${yearAge}</strong> years,
    <strong>${monthAge}</strong> months and <strong>${dayAge}</strong> days.
    `;

    btn.style.display = 'none';
    resetBtn.style.display = 'block';
  }
}

function clearInput() {
  document.getElementById('dob').value = '';
  result.innerHTML = '';
  err.innerHTML = '';
  resetBtn.style.display = 'none';
  btn.style.display = 'block';
}

btn.addEventListener('click', calculateAge);
resetBtn.addEventListener('click', clearInput);
