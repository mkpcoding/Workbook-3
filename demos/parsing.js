let name = "Murat Polat";

let position = name.indexOf(" ")
console.log(position)

let first = name.substring (0,position)

let last = name.substring (position + 1)

console.log("First name:" + first) 
console.log("Last name:" + last) 



function parseAndDisplayName(name) {
    let positionOfSpace = name.indexOf(" ");
    console.log(positionOfSpace);
    
    let first = name.substring(0, positionOfSpace);
    console.log(first);
    
    let last = name.substring(positionOfSpace + 1);
    console.log(last);  

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");