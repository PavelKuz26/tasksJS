// Фильтрация строки
let string = 'Lorem, ipsum dolor';

let vowels = ["a", "e", "u", "y", "o", "i"];

let getVowels = stringToFilter => {
    let extractedVowels = "";

    for( let i = 0; i < stringToFilter.length; i++){
        let currentLetter = stringToFilter[i].toLowerCase();

        if(vowels.includes(currentLetter)){
            extractedVowels += currentLetter;
        }
    }
    return extractedVowels;
}

console.log(getVowels(string));


// Выборка объекта

const workers = [
    {"user":"Ivan","salary":300},
    {"user":"Den","salary":1500},
    {"user":"Olga","salary":900},
    {"user":"Petr","salary":1200}
];

const getWorthyWorkers = (workerArray) => {
    const worthyWorkers = [];

   workerArray.forEach(currentWorker => {
    if(currentWorker.salary > 1000){
        worthyWorkers.push(currentWorker.user)
    }
   });

    return worthyWorkers;
}

console.log(getWorthyWorkers(workers))


// Анализ строки

const path = "/users/download/index.html";

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);

    if(pathExt == requiredExt){
        return true
    } else {
        return false;
    }
}

console.log(isHtml(path));


// Фильтрация массива

const mixidArray = [3,43,55,12,44,68,100,6,52,11];

const isEven = num => {
    return num % 2 == 0
}

const filterArray = (arrayToFilter, filterFn) => {
    const filterArray = [];

    arrayToFilter.forEach( num =>{
        if(filterFn(num)){
            filterArray.push(num);
        }
    })

    return filterArray;
}

console.log(filterArray(mixidArray, isEven));