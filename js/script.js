const btn = [
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
      ],
      inputEmail = [
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
      ],
      squareSix = document.createElement('div'),
      squareSeven = document.createElement('div'),
      taskOne = document.querySelector('.task-1'),
      taskTwo = document.querySelector('.task-2'),
      taskThree = document.querySelector('.task-3'),
      taskFour = document.querySelector('.task-4'),
      taskFive = document.querySelector('.task-5'),
      taskSix = document.querySelector('.task-6'),
      taskSeven = document.querySelector('.task-7'),
      taskEight = document.querySelector('.task-8'),
      taskNine = document.querySelector('.task-9');

btn[0].textContent = 'Привет мир!';
taskOne.prepend(btn[0]);
btn[0].addEventListener('click', function(){
    alert("Привет мир!");
});

//task-2
btn.forEach((item, i) => {
    btn[i].style.cssText = "margin-left: 10px; margin-top: 10px; display: block";
});

btn[1].textContent = 'Заполнить';
taskTwo.prepend(btn[1]);
taskTwo.append(inputEmail[0]);
inputEmail[0].classList.add('task-2__input');
inputEmail[0].style.cssText = "display: block; margin-top: 10px";
inputEmail[0].type = 'text';
inputEmail[0].name = 'email';
inputEmail[0].placeholder = '';

btn[1].addEventListener('click', () => {
    inputEmail[0].value = 'test@gmail.com';
});


//task-3

btn[2].textContent = 'Кнопка 3';
taskThree.prepend(btn[2]);
taskThree.append(inputEmail[1]);
inputEmail[1].classList.add('task-3__input');
inputEmail[1].style.cssText = "display: block; margin-top: 10px";
inputEmail[1].type = 'text';
inputEmail[1].name = 'text';
inputEmail[1].placeholder = '';

btn[2].addEventListener('click', () => {
    if (inputEmail[1].value == '') {
        alert('Вы ничего не ввели');
    } else {
        alert(`Вы ввели ${inputEmail[1].value}`);
    }
});

//task-4

btn[3].textContent = 'Поменять';
taskFour.prepend(btn[3]);
taskFour.append(inputEmail[2]);
taskFour.append(inputEmail[3]);
inputEmail[2].classList.add('task-4__input');
inputEmail[3].classList.add('task-4__input');
inputEmail[2].style.cssText = "display: block; margin-top: 10px";
inputEmail[3].style.cssText = "display: block; margin-top: 10px";
inputEmail[2].type = 'text';
inputEmail[3].type = 'text';
inputEmail[2].name = 'text';
inputEmail[3].name = 'text';
inputEmail[2].placeholder = '';
inputEmail[3].placeholder = '';

btn[3].addEventListener('click', () => {
    let a = '';
    a = inputEmail[2].value;
    inputEmail[2].value = inputEmail[3].value;
    inputEmail[3].value = a;
});

//task-5
btn[4].textContent = 'Заблокировать';
btn[5].textContent = 'Разблокировать';
taskFive.prepend(btn[4]);
taskFive.append(btn[5]);
taskFive.append(inputEmail[4]);
inputEmail[1].classList.add('task-3__input');
inputEmail[4].style.cssText = "display: block; margin-top: 10px;";
inputEmail[4].type = 'text';
inputEmail[4].name = 'text';
inputEmail[4].placeholder = '';
inputEmail[4].disabled = false;

btn[4].addEventListener('click', () => {
    inputEmail[4].disabled = true;
});
btn[5].addEventListener('click', () => {
    inputEmail[4].disabled = false;
});

//task-6
taskSix.append(btn[6]);
const hideText = 'Скрыть квадрат';
const unhideText = 'Показать квадрат';
btn[6].textContent = `${hideText}`;

squareSix.classList.add('task-6__square');
taskSix.append(squareSix);

btn[6].addEventListener('click', () => {
    if (btn[6].textContent == `${hideText}`) {
        btn[6].textContent = `${unhideText}`;
        squareSix.style.display = 'none';
    } else {
        btn[6].textContent = `${hideText}`;
        squareSix.style.display = 'block';
    }
});

//task-7

