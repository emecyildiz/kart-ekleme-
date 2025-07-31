const nameInput = document.getElementById('name');
const türInput = document.getElementById('tür');
const button = document.querySelector('.button');
button.addEventListener('click', function() {
    const name = nameInput.value;
    const tür = türInput.value;
    if (name && tür) {
        kartekle(name, tür);
        nameInput.value = '';
        türInput.value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

function kartekle(name, tür) {
    const div = document.createElement('div');
    div.className = 'card';
    div.appendChild(document.createTextNode(`Name: ${name}, Tür: ${tür}`));
    document.body.appendChild(div);
}