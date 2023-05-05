// let y = getFullYear();
// console.log(y); 

// function getFullYear(){ 
//     return 2023; 
// }

// function setFullYear(year) { 
//     let storedYear = year; 
//     console.log(storedYear);
//     return 2021;
// }

class Person{
    constructor(first, last) { 
        this.first = first; 
        this.last = last; 

    }
    getFullName() { 
        return `${this.first} ${this.last}`
    }
    toString() {
        return `${this.last} ${this.first}`
    }
}

let person = new Person("Murat","Polat"); 

console.log(person.toString()); 
console.log(person.getFullName());