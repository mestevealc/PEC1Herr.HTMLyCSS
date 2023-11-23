document.addEventListener("DOMContentLoaded", function () {
  let botonPresentacion = document.querySelector(".verMas");

  botonPresentacion.addEventListener("click", function () {
    let nombres = [
      "Winona Ryder",
      "David Harbour",
      "Finn Wolfhard",
      "Millie Bobby Brown",
      "Gaten Matarazzo",
      "Caleb McLaughlin",
      "Natalia Dyer",
      "Charlie Heaton",
      "Cara Buono",
      "Matthew Modine",
      "Noah Schnapp",
      "Sadie Sink",
      "Joe Keery",
      "Dacre Montgomery",
      "Sean Astin",
      "Paul Reiser",
      "Maya Hawke",
      "Priah Ferguson",
      "Brett Gelman",
      "Jamie Campbell Bower",
      "Eduardo Franco",
      "Joseph Quinn",
    ];

    let listaNombres = nombres.join("\n");

    alert(listaNombres);
  });
});
