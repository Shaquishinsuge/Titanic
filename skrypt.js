//wiek
function enforce_maxlength(event) {
    var t = event.target;
    if (t.hasAttribute('maxlength')) {
      t.value = t.value.slice(0, t.getAttribute('maxlength'));
    }
  }

  document.body.addEventListener('input', enforce_maxlength);
//pasengerFare

//check button
document.getElementById("Check").onclick = function () {
    location.href = "Check.html";
};