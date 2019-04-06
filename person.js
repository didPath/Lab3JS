const person = {
    name : 'Didpath Malangpoo',
    age : 20
}

class Person{
    constructor(name = "John Doe",age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} (${this.age})`);
    }
}

module.exports = {person,Person};