//vote
// - election day
// - voter list
// - valid CNIC
// -

// if all values comes true then you can vote cast

day = prompt("Its today election day");

if (day == "yes") {
    
  list = prompt("You name in list?")

    if (list == "yes") {
    cnic = prompt("do you have valid CNIC?");
    if ((cnic = "yes")) {
      alert("You can cast the vote");
    } else {
      alert("You can cast the vote");
    }
  } else {
    alert("you can not cast the vote");
  }
} 
else {
    alert("you can not cast the vote");
  }
