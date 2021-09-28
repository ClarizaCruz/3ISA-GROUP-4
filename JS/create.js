function cancelbutton(){
    alert(document.getElementById("cancel").value)
}

function savebutton(){
    alert(document.getElementById("save").value)
}

function vat(totalsales){
    this.totalsales = document.getElementById("totalSales").value;
    

var input = document.getElementById("totalSales");
input.addEventListener("keyup", function(event) {
  if (KeyboardEvent.keyCode === 13) {
    document.getElementById("vat").innerHTML = this.totalsales*.12;
   event.preventDefault();
   document.getElementById("vat").click();
   
  }})}