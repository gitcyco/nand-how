document.addEventListener("DOMContentLoaded", function () {
  const canvas = new draw2d.Canvas("main-canvas");

  // Add a simple triangle
  let triangle = new TriangleFigure({ x: 100, y: 100, width: 100, height: 140 });
  canvas.add(triangle);

  // Add a basic PostIt note
  let msg = new draw2d.shape.note.PostIt({ text: "Just a basic triangle" });
  canvas.add(msg, 20, 20);
});
