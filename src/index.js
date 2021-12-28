function name_prompt() {
  let name = prompt("Lütfen İsminizi Giriniz");

  document.getElementById("name_surname_html").innerHTML =
    "Merhaba," + name + "! Hoş geldin! ";

  setInterval(function () {
    date_time();
  }, 1000);
}

function date_time() {
  var gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  var day = new Date();
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var dateTime = date + " " + time + " " + gunler[day.getDay()];

  document.getElementById("date_time").innerHTML = dateTime;
}
