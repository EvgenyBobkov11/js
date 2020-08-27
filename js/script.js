//обычное гавно

//let number = 4;

//console.log(-4/0);
//console.log('string' * 9);

//const person = "Alex lorem200";

//const bool = false;

// console.log(something);

//let und;
//console.log(und);

// Объекты с ключами

//const obj = {
    //name: "John",
    //age: 25,
    //isMaried: false
//};

//console.log(obj.name);

// массив 

//let arr = ["plum.png","orange.jpg","apple.bmp",{},6];
//console.log(arr[1])

//Алерт обычный

// alert('Hello');

//задаю вопросы

//const result = confirm("Are u here?");

//console.log(result);

//const answer = +prompt ("Вам есть 18?", "");

//console.log(answer + 5);

//задаю вопросы

//const answers = [];

//answers[0] = prompt('Как ваше имя?');
//answers[1] = prompt('Как ваше Фамилие?');
//answers[2] = prompt('Сколько вам лет?');

//document.write(answers);
//console.log(typeof(null));

//ССылки

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);


// Привет user

//const user = "Evgeny";
//alert (`Привет,${user}`);


// тут все как в питоне, два плюса превращает в чиловое значение
//console.log(4 + '5');


// тут два плюса плюс 1


//let incr = 10,
//    decr = 10;

//incr++;
//decr--;

//console.log(incr);
//console.log(decr);

// как в питоне процецнт от деления
//console.log(5%2);

// двойное равентсво это равно, если тройное равенство "===" то это строгое сравнение ( еще и по типу данных)

//console.log(2 + 2 * 2 !== "8");

// && -оператор и  вертикальные палочки (или)

// если оба тру то тру, если хоть один фолз то фолз

// "!" знак отрицания (типа не равно) обращает значение в обратное

//const isChecked = false,
    //isClose = false;

//console.log(isChecked  || !isClose);

//Задание 1 js 12 


/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?'); // тут все правильно 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, // не правильно, смотри ниже
    actors: {},
    genres:[],
    privat: false
}; // тут тоже все правильно

const a = prompt('Один из последних просмотренных фильмов?');
const b = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB.movies);

*/

/*

// IF условия

if (4 == 9) {
    console.log('ok');
} else {
    console.log('Error');
}

// если в условии будет одно число ( то будет true)

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log("Mnogo");
} else {
    console.log("ok");
}

(num == 50) ? console.log("ok") : console.log('error');

// "?" - тернарный оператор ( потому что три слова)

//const num = 50;

// switch идет на строгое сравнение

switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 50:
        console.log('Ok');
        break;
    default:
        console.log('not that time');    
}

// со строчными элементами все работает точно также 

*/
//циклы

/*

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while(num < 55);

for (let i = 1; i < 8; i++ ) {
    console.log(i)
}

for (let i = 1; i < 8; i++ ) {
    if (i === 6) {
        break;
    }
    console.log(i);
}


for (let i = 1; i < 10; i++ ) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}
*/


// задание к 15 уроку

let numberOfFilms = ('');
/*

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
if (numberOfFilms == '') {
    console.log('Неверное значение, пустая строка');
    numberOfFilms = ('');
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
} else if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (10 <= numberOfFilms <= 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
} */

/* while (numberOfFilms == '') {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
}

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {}, 
    actors: {},
    genres:[],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30 ) {
    console.log('Вы классический зритель');
} else if (30 < personalMovieDB.count ) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


for (let i = 0; i <2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('ВВедите коректные данные!!!');
        i--;
    }    
}

console.log(personalMovieDB.movies);

*/

// Функции
let num = 20;

function showFirstMessage (text) {
    console.log(text);
    num = 80;
    console.log(num); // будет равно 10, так как эта команда локальная
}

showFirstMessage('Hello world');
console.log(num);

// имя функции должно показывать что она означает
// Аргументы через запятую 
// Если объявляем переменную внутри функции, то она локальная
// бля сложно, но кароче если локальная переменная записана просто (нам = 80) то в консоль будет выводиться 80, а если она записана как лэт нам ( то будет выводиться глобальная переменная)

function calc(a,b) {
    return (a + b);
}

console.log(calc(4,3));

console.log(calc(5,6));

console.log(calc(14,1232));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);













