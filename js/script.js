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












