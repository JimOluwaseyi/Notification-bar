const btn = document.querySelector('#btn');
const containerDiv = document.querySelector('.text-container')
  

let message = ['Message One', 'Message Two', 'Message Three', 'Message Four', 'Message Five']

btn.addEventListener('click', ()=>{
    const toastDiv = document.createElement('div');
    toastDiv.classList.add('toast');
    containerDiv.appendChild(toastDiv);
    btn.style.color = 'grey'
    let randomNumber = message[Math.floor(Math.random() * message.length)];
    toastDiv.innerText = randomNumber;

    setTimeout(()=>{
        toastDiv.remove()
    }, 4000)
});




console.log(toastDiv)
console.log(btn)