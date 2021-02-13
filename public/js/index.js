const inputContainer = document.getElementById('input-container')
const addPerson = document.getElementById('add-person');
let count = 2;
addPerson.addEventListener('click', () => {
    const node = document.createElement('input')
    node.setAttribute('name' , `person${count++}`)
    inputContainer.appendChild(node);
})