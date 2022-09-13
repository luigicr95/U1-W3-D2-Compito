let crowNames = "Unkindness";
let crowText = null;
let owlNames = "Parliament";
let owlText = null;
let larkNames = "Bevy";
let larkText = null;

function getInfo() {
  {
    let crowText = document.getElementById("animals-text").value;
    if (
      crowText == crowNames &&
      document.getElementById("animals").value == "crows"
    ) {
      alert("Well Done");
    }
  }
  {
    let owlText = document.getElementById("animals-text").value;
    if (
      owlText == owlNames &&
      document.getElementById("animals").value == "owls"
    ) {
      alert("Well Done");
    }
  }
  {
    let larkText = document.getElementById("animals-text").value;
    if (
      larkText == larkNames &&
      document.getElementById("animals").value == "larks"
    ) {
      alert("Well Done");
    }
  }
}

console.log(crowText == crowNames);
