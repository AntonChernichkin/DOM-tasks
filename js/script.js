const btn = [
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
      ],
      inputEmail = document.createElement('input'),
      taskOne = document.querySelector('.task-1'),
      taskTwo = document.querySelector('.task-2');

btn[0].textContent = 'Привет мир!';
taskOne.prepend(btn[0]);
btn[0].addEventListener('click', function(){
    alert("Привет мир!");
});

//task-2
btn.forEach((item, i) => {
    btn[i].style.cssText = "margin-left: 10px";
});

btn[1].textContent = 'Заполнить';
taskTwo.prepend(btn[1]);
taskTwo.append(inputEmail);
inputEmail.classList.add('task-2__input');
inputEmail.style.cssText = "display: block; margin-top: 10px";
inputEmail.type = 'text';
inputEmail.name = 'email';
inputEmail.placeholder = '';

btn[1].addEventListener('click', () => {
    inputEmail.value = 'test@gmail.com';
});


//task-3

