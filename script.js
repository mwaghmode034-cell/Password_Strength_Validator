const Password_Input = document.getElementById('password');
const bar = document.getElementById('bar');
const Strength_text = document.getElementById('Strength_text')
const digits = document.getElementById('digits');
const length = document.getElementById('length');
const special_charS = document.getElementById('special_charS');

Password_Input.addEventListener('input', () => {
    const value = Password_Input.value;
    let score = 0;

    if ((score == 0 && value.length > 0) && (value.length < 8 && !/(\d.*){2,}/.test(value) && ! /[^A-Za-z0-9]/.test(value))) {
        bar.style.width = '5%';
        bar.style.backgroundColor = ' #090909';
        Strength_text.innerText = "Very Weak";
        Strength_text.style.color = ' #090909';
        updateSTATUS(length, false);
        updateSTATUS(digits, false);
        updateSTATUS(special_charS, false);

        return 0;
    }
    if (value.length >= 8) {
        updateSTATUS(length, true);
        score++;
    }
    else {
        updateSTATUS(length, false);
    }
    if (/(\d.*){2,}/.test(value)) {
        updateSTATUS(digits, true);
        score++;
    }
    else {
        updateSTATUS(digits, false);
    }
    if (/[^A-Za-z0-9]/.test(value)) {
        updateSTATUS(special_charS, true);
        score++;
    }
    else {
        updateSTATUS(special_charS, false);
    }
    updateUI(score);

});
function updateSTATUS(element, isValid) {
    if (isValid) {
        element.classList.add('valid');
        element.classList.remove('invalid');
    } else {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}
function updateUI(score) {

    const colors = ['#e0e0e0', ' #ff4d4d ', '#ffa500', '#27ae60'];
    const widths = ['0%', '33%', '66%', '100%'];
    const S_text = ['', 'Weak', 'Medium', 'Strong']
    bar.style.width = widths[score]
    bar.style.backgroundColor = colors[score];
    Strength_text.innerText = S_text[score];
    Strength_text.style.color = colors[score];
}

const toggle_password = document.getElementById('togglePassword');

toggle_password.addEventListener('click', function () {
    const type = Password_Input.getAttribute('type') === 'password' ? 'text' : 'password';
    Password_Input.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';

});


