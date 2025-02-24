const form = document.querySelector('#form');
const input = document.querySelector('#input');
const qrWrapper = document.querySelector('#card-qr');
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&color=1b3a3f&data=';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    qrWrapper.innerHTML = '';
    const request = api + input.value;
    const img = `<img src="${request}" alt="QR-code">`;
    qrWrapper.classList.add('open');
    qrWrapper.insertAdjacentHTML('beforeend', img);
});