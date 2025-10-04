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
      margin: 30px 0;
      position: relative;
      width: 800px;
      height: 80px;
      border-bottom: 2px solid #ccc;
    }
    .start-line, .finish-line {
      position: absolute;
      top: 0;
      height: 100%;
      width: 2px;
      background: black;
    }
    .start-line { left: 0; }
    .finish-line { right: 0; }

    .label {
      position: absolute;
      top: -25px;
      font-weight: bold;
    }
    .start-label { left: 0; }
    .finish-label { right: 0; }

    .car {
      position: absolute;
      left: 0;
      bottom: 10px;
      font-size: 50px;
      transition: transform linear;
      transform: scaleX(-1); /* Повернуть машину так, чтобы морда смотрела вперед */
    }

    button {
      font-size: 18px;
      padding: 10px 20px;
      cursor: pointer;
    }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <h2>Formula 1 Race</h2>

  <div class="track">
    <div class="start-line"></div>
    <div class="finish-line"></div>
    <div class="label start-label">START</div>
    <div class="label finish-label">FINISH</div>
    <span class="car" id="car1">🏎️</span>
  </div>

  <div class="track">
    <div class="start-line"></div>
    <div class="finish-line"></div>
    <div class="label start-label">START</div>
    <div class="label finish-label">FINISH</div>
    <span class="car" id="car2">🚗</span>
  </div>

  <div class="track">
    <div class="start-line"></div>
    <div class="finish-line"></div>
    <div class="label start-label">START</div>
    <div class="label finish-label">FINISH</div>
    <span class="car" id="car3">🚙</span>
  </div>

  <br>
  <button id="raceBtn">>RACE<</button>

  <script>
    $(document).ready(function() {
      $('#raceBtn').click(function() {
        $('.track').each(function() {
          const car = $(this).find('.car');
          const finish = $(this).find('.finish-line');
          const trackWidth = $(this).width();
          const carWidth = car.width();
          const finishWidth = finish.width();

          // сброс позиции к линии старта
          car.css({
            'transform': 'translateX(0px) scaleX(-1)',
            'transition': 'none'
          });

          setTimeout(function() {
            const maxDistance = trackWidth - carWidth - finishWidth - 10;
            const duration = Math.random() * 3 + 2;

            // движение вперед к финишу с правильным направлением
            car.css({
              'transition': 'transform ' + duration + 's linear',
              'transform': 'translateX(' + maxDistance + 'px) scaleX(-1)'
            });
          }, 50);
        });
      });
    });
  </script>
</body>
</html>
