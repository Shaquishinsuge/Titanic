//wiek
var minAge = 0,
    maxAge = 80,
    select = document.getElementById('Age');

for (var i = minAge; i<=maxAge; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}
//pasengerFare
var minFare = 10,
    maxFare = 200,
    select = document.getElementById('Fare');

for (var i = minFare; i<=maxFare; i++){
    if(i % 10 === 0){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}}