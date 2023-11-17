let popup = document.getElementById("popup");
let title = document.getElementById("popupTitle");
let desc = document.getElementById("popupDesc");

function openMonkey(){
  title.textContent = "Hozzáférés megtagadva!"
  desc.textContent = "Kérlek, írd be a hozzáférési jelszót a megtekintéshet!"
  popup.classList.add("open-popup");
}
function closeMonkey(){
  var code = document.getElementById('accessCode').value;
  if (code == "MonkeyAccess" || code == "GrllzsMziAdmn") {
    window.location.href = "/filmek/five-little-monkeys.html"
  }
  popup.classList.remove("open-popup");
}

function openApuci2(){
 // title.textContent = "Hozzáférés megtagadva!"
 // desc.textContent = "Kérlek, írd be a hozzáférési jelszót a megtekintéshet!"
 // popup.classList.add("open-popup");
 window.location.href = "/filmek/megjott-apuci-2.html"
}
function closeApuci2(){
  var code = document.getElementById('accessCode').value;
  if (code == "MonkeyAccess" || code == "GrllzsMziAdmn") {
    window.location.href = "/filmek/five-little-monkeys.html"
  }
  popup.classList.remove("open-popup");
}