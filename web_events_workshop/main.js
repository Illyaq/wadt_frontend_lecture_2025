# SAMPLE CODE
function startRace() {
  const car1 = document.getElementById("car1");
  const car2 = document.getElementById("car2");
  const car3 = document.getElementById("car3");

  car1.style.transform = "translateX(0px)";
  car2.style.transform = "translateX(0px)";
  car3.style.transform = "translateX(0px)";

  setTimeout(() => {
    car1.style.transition = "transform 3s linear";
    car2.style.transition = "transform 3s linear";
    car3.style.transition = "transform 3s linear";

    car1.style.transform = "translateX(" + (Math.random() * 500 + 200) + "px)";
    car2.style.transform = "translateX(" + (Math.random() * 500 + 200) + "px)";
    car3.style.transform = "translateX(" + (Math.random() * 500 + 200) + "px)";
  }, 200);
}
