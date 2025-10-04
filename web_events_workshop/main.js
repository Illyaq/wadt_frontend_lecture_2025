# SAMPLE CODE
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Formula 1 Race</title>
  <style>
    body {
      font-family: monospace;
      background: #f0f0f0;
      padding: 20px;
    }
    .track {
      margin: 20px 0;
      font-size: 20px;
      white-space: pre;
    }
    .car {
      display: inline-block;
      transition: transform 3s linear;
    }
    .finish {
      margin-left: 600px;
      font-weight: bold;
    }
    button {
      font-size: 18px;
      padding: 10px 20px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Formula 1 Race</h2>

  <div class="track">
    A1 START > <span class="car" id="car1">🏎️</span> -------------------- | FINISH
  </div>
  <div class="track">
    A2 START > <span class="car" id="car2">🏎️</span> -------------------- | FINISH
  </div>
  <div class="track">
    A3 START > <span class="car" id="car3">🏎️</span> -------------------- | FINISH
  </div>

  <br>
  <button onclick="startRace()">>RACE<</button>

  <script>
    function startRace() {
      document.getElementById("car1").style.transform = "translateX(" + (Math.random() * 500 + 200) + "px)";
      document.getElementById("car2").style.transform = "translateX(" + (Math.random() * 500 + 200) + "px)";
      document.getElementById("car3").style.transform = "translateX(" + (Math.random() * 500 + 200) + "px)";
    }
  </script>
</body>
</html>
