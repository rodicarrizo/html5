$(document).on("ready",configurarApp);

function configurarApp()
{
    var canvas = document.getElementById('micanvas');
    var ctx = canvas.getContext('2d');
    canvas.width= screen.availWidth;
    dibujaFooter(canvas,ctx)
}
function dibujaFooter(canvas,contexto)
{
    contexto.fillStyle="rgba(0,0,0,0,8)";
    contexto.moveTo(0,0);
    contexto.quadraticCurveTo(0,-50,canvas.width-100,canvas.heigth-50)
    contexto.fill();
}