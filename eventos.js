var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 0;
var y = 297;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
dibujarLinea("red", 300, 300, 0, 300, papel);
dibujarLinea("green", 600, 0, 600, 600, papel);
dibujarLinea("red", 330, 0, 0, 0, papel);
dibujarLinea("green", 0, 0, 0, 600, papel);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 2;
 lienzo.moveTo(xinicial,yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath()
}

function dibujarTeclado(evento)
{
  var colorcito = "black";
  var movimiento = 1;
  switch(evento.keyCode)
  {
    case teclas.UP:
     dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
     y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
    y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
    x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;
 }
}
