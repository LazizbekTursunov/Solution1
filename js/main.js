// Xususiy hol uchun yechim

var Modify = 500
var Jack = 250
var Jam = 120

var Dollar = (Modify + Jack) * 9433.34
var Euro = Jam * 10354.03

var elCalculate = Dollar + Euro

var elHeading = document.querySelector(".heading")

var Fucked = Number(prompt("Mablag'ingiz:"));

// console.log(Fucked);

if (Fucked>=elCalculate){
    elHeading.textContent = ("Oq yo'l, Alisher!");
}

 else {
    elHeading.textContent = ("Alisher, ozgina sabr qilish kerak bo'larkan");
}