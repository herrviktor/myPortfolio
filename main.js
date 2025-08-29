const btn = document.getElementById('langToggle');
const svElements = document.querySelectorAll('.svenska');
const enElements = document.querySelectorAll('.english');

btn.addEventListener('click', () => {
    const isSvHidden = svElements[0].style.display === 'none';
    if (isSvHidden) {
        svElements.forEach(el => el.style.display = 'block');
        enElements.forEach(el => el.style.display = 'none');
        btn.textContent = 'Switch to English';
    } else {
        svElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        btn.textContent = 'Byt till svenska';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const svElements = document.querySelectorAll('.svenska');
    const enElements = document.querySelectorAll('.english');
    svElements.forEach(el => el.style.display = 'block');
    enElements.forEach(el => el.style.display = 'none');
    btn.textContent = 'Switch to English';
})