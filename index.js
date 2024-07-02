"use strict";
// const test = 'string'
// function app() {
//     console.log(test)
//     //главная ф-ция
//      console.log('1')
// }
// app()
// // const month = 'July' //тип джулай из-за конст Без явного объявления типа через :string
// // type Month = string | number //кастомный тип
// // type Month = 'June' | 'May' //даст перебирать только эти значения в перменной
// // let mon: Month = 'July' //выдаст ошибку типа, тк это не джун или май
// // type Car = {
// //     model: string,
// //     color: string
// //     year?: number //? означает, что года может не быть
// // }
// type CarModel = 'Opel' | 'BMW' | 'AUDI'
// interface Car {
//     model: CarModel
//     color: string
//     year?: number
//     owners: string[]
// }
// let car: Car = {
//     model: 'Opel',
//     color: 'blue',
//     year: 2020,
//     owners:['Viktor']
// }
// let car1: Car = {
//     model: 'Opel',
//     color: 'blue',
//     owners:[]
// }
// function customFilter(array: any[]): any[] | null {
//     if(array.length<3){
//         return null
//     }
// return array.filter(item => item.isTrue)
// }
// const result = customFilter([{id:1, isTrue: true}])
// console.log(result)
//Типы и Интерфейсы 
//Типы 
// type CarModel = 'opel'|'audi'
// type CarYear = number
// type CarOwners = string[]
// type CarDetails = {
//     details: {
//         wheelSize: number
//     }
// }
// type CarColor = {
//     color: string
// }
// type Car = {
//     model: CarModel
//     year: CarYear
//     owners: CarOwners
// } & CarDetails & CarColor//соединили два типа, можно добавить несколько
// _______________________________
//Интерфейсы
// interface Car extends CarDetails { //добавляем тип кардитейлс, нельзя несколько типов добавить 
//    model: CarModel
//    year: CarYear
//    owners: CarOwners
// }
// const car: Car = {
//     model: 'audi',
//     year: 2020,
//     owners: ['Viktor'],
//     // color: 'blue',
//     details: {
//         wheelSize: 19
//     }
// }
// _________________________________________
// Дженерики
// type Owners = Array<string | number>
// type KeyValueObject = Record<string, string>
// interface Methods<T> {
//     add: (value: T) => void
//     get: () => T
// }
// const car: Methods<number> = {
//     add(value) {
//         console.log(value)
//     },
//     get() {
//         return 1
//     },
// }
// function fillArray<T>(value: T, length: number): Array<T> {
//     return new Array(length).fill(value)
// }
// // //пишем Т, так как не знаем точно, какой тип будем передавать
// const array = fillArray<string>('item',10)
// console.log(array)
// --------------------
// Enums
//нумерной 
// enum Direction {
//     UP, //показывает просто индекс, если вызвать консоль лог
//     DOWN,
//     LEFT,
//     RIGHT
// }
//строчный, где приравнивается константа
// enum Direction {
//     UP = "UP",//покажет то, что написано в кавычках, если вызвать в консоль этот элемент 
//     DOWN = "DOWN",//строчный енум, ключ значение одинаковые
// }
// console.log(Direction.UP  )
// type Move = {
//     steps: number,
//     direction: keyof typeof Direction //можем в типе указать енам
// }
// //keyof typeof - берем тип от Дирекшн и забираем все ключи от него
// const moveRight: Move = {
//     steps: 3,
//     direction: 'UP' //надо верно прописать ап, не просто АП, а Дирекшн.АП
//     //если сделали keyof typeof то можем вписать просто АП (поставить '' и даст выбор), так как он забрал все ключи и все типы Дирекшна
//     //так работает только когда строчный енам и ключ и значение одинаковые
// }
// enum LogLevel {//задали все возможные значения
//     INFO,
//     WARN,
//     ERROR,
//     LOG
// }
// type Message = {
//     value: string,
//     logLevel: LogLevel//использовали значения енама в типе
// }
// function log(message: Message) {
//     switch(message.logLevel) {
//         case LogLevel.LOG:
//             return console.log(message.value)
//         case LogLevel.ERROR:
//             return console.error(message.value)
//     }
// }
// log({logLevel: LogLevel.ERROR, value: 'Bad error'})
// log({logLevel: LogLevel.LOG, value: 'Ok'})
// enum Input { //прописываем какие типы есть 
//     TEXT = 'TEXT',
//     DATA = 'DATA',
//     SLIDER = 'SLIDER',
//     RADIO = 'RADIO',
//     CHECKBOX = 'CHECKBOX'
// }
// const allowedTypes = [Input.TEXT, Input.SLIDER, Input.RADIO] //какие типы сейчас разрешены
// function validateInputTypes(inputType: Input) { //ф-ция проверки типа
//     const isAllowedType = allowedTypes.includes(inputType) //проверяем на соответствие типу
// //какая-то логика
//     if(isAllowedType) {
//         return 'ok'
//     }
//     return 'forbidden'
// }
//-------------------------------------------------------------
const counterElement = document.querySelector('#count');
const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');
function getCounterValue(element) {
    return element.innerHTML;
}
function increment() {
    if (!counterElement) {
        throw new Error('Counter element not found');
    }
    const value = getCounterValue(counterElement);
    const calculationResult = Number(value) + 2;
    counterElement.innerHTML = String(calculationResult);
}
function decrement() {
    if (!counterElement) {
        throw new Error('Counter element not found');
    }
    const value = getCounterValue(counterElement);
    const calculationResult = Number(value) - 1;
    counterElement.innerHTML = String(calculationResult);
}
incrementButton === null || incrementButton === void 0 ? void 0 : incrementButton.addEventListener('click', increment);
decrementButton === null || decrementButton === void 0 ? void 0 : decrementButton.addEventListener('click', decrement);
