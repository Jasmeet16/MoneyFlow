const inputContainer = document.getElementById('input-container')
const addPerson = document.getElementById('add-person');
let count = 3;
addPerson.addEventListener('click', (e) => {
    e.preventDefault();
    const node = document.createElement('input')
    node.setAttribute('name' , `person${count++}`)
    inputContainer.appendChild(node);
})