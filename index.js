// Пример файла: example.js

const greeting = "Hello, world!" // Отсутствует точка с запятой

function sayHello(name) {
    console.log(greeting + " " + name) // Отсутствует точка с запятой
}

sayHello("Alice")

const numbers = [1, 2, 3, 4, 5]
for (var i = 0; i < numbers.length; i++) { // Использование var вместо let
    console.log(numbers[i])
}

const obj = {
    name: "Bob",
    age: 30,
    isActive: true
}

if (obj.isActive) {
    console.log("User is active") // Отсутствует точка с запятой
} else {
    console.log("User is inactive")
}

function add[a] {
    return a + b // Отсутствует точка с запятой
}

console.log(add(5, 10))