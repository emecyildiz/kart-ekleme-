const nameInput = document.getElementById('name');
const türInput = document.getElementById('tür');
const button = document.querySelector('.button');
const bigdiv = document.querySelector('.bigdiv');

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
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';

    const div = document.createElement('div');
    div.className = 'card';

    const deletebtn = document.createElement('button');
    deletebtn.className = 'deletebtn';
    deletebtn.textContent = 'x';
    div.appendChild(deletebtn);
    deletebtn.addEventListener('click', function() {
        wrapper.remove();
    });
    
    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = `Name: ${name}, Tür: ${tür}`;
    div.appendChild(title);

    const info = document.createElement('div');
    info.className = 'info';
    info.textContent = `Name: ${name}, Tür: ${tür}`;
    wrapper.appendChild(div);
    wrapper.appendChild(info);
    bigdiv.appendChild(wrapper);

    div.addEventListener("click", function() {
        div.classList.toggle("active");
        info.style.display = div.classList.contains("active") ? "block" : "none";
    });
}

