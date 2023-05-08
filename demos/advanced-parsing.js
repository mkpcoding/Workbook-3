
function parseAndDisplayName(name) {
    let positionOfSpace = name.indexOf(" ");
    let positionOfSpacex = name.lastIndexOf(" ");
    let first = name.substring(0, positionOfSpace);
    let middle = name.substring(positionOfSpace + 1, positionOfSpacex);
    let last = name.substring(positionOfSpacex + 1);
  
    let output = 
      ` Name: ${name}
      First: ${first}
      Middle: ${middle}
      Last: ${last}
      `; 
    console.log(output); 
  }
  
  parseAndDisplayName("Brenda Kaye");
  parseAndDisplayName("Ian M Auston");
  parseAndDisplayName("Siddalee Grace");
  