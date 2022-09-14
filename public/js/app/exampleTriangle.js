document.addEventListener("DOMContentLoaded", function () {
  var canvas = new draw2d.Canvas("gfx_holder");

  var triangle = new TriangleFigure({ x: 100, y: 100, width: 100, height: 140 });
  canvas.add(triangle);

  // JUST ADD SOME DOCU ELEMENTS ON THE SCREEN
  var msg = new draw2d.shape.note.PostIt({ text: "Simple example how to create your own vector figure" });
  canvas.add(msg, 20, 20);
});
