/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания


let numberOfFilms = ('');


function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
}

function rememberMyFilms () {
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
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30 ) {
        console.log('Вы классический зритель');
    } else if (30 < personalMovieDB.count ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }

}
/*
function showMyDB () {
    if (personalMovieDB.privat == "false") {
        console.log('privat')
    }

}
*/


function showMyDB (hidden) {
    if (!hidden ) {
        console.log(personalMovieDB.privat);
    }
}



function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const c = promt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = c;
    }
}


const personalMovieDB = {
    count: +numberOfFilms,
    movies: {}, 
    actors: {},
    genres:[],
    privat: false
};




console.log(personalMovieDB);