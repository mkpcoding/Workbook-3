function vendingMachine(coinSlot) {
    switch (coinSlot) {
      case "Quarter":
        console.log("Crunch");
        break;
        case "Dime":  
        console.log("Coin is returned.");
        break;
      default:
        console.log("Invalid coin.");
    }
  }
  
  let firstCoin = "Dime";
  let secondCoin = "Quarter";
  vendingMachine("Dime");
  