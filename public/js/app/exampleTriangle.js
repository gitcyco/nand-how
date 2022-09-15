document.addEventListener("DOMContentLoaded", function () {
  // var app = new example.Application();

  const canvas = new draw2d.Canvas("main-canvas");
  canvas.paper.canvas.style.position = "relative";

  // Add a simple triangle
  let triangle = new TriangleFigure({ x: 100, y: 100, width: 100, height: 140 });
  canvas.add(triangle);

  // Add a basic PostIt note
  let msg = new draw2d.shape.note.PostIt({ text: "Just a basic triangle" });
  canvas.add(msg, 20, 20);

  const exportLink = document.getElementById("export-json");
  exportLink.addEventListener("click", (e) => exportJSON(e, canvas));
});

function exportJSON(e, canvas) {
  console.log("Clicked Export JSON", canvas);
  // displayJSON(canvas);
  const canvasJSON = getCanvasJSON(canvas);
  console.log(canvasJSON);
}

function displayJSON(canvas) {
  const writer = new draw2d.io.json.Writer();
  writer.marshal(canvas, function (json) {
    console.log(JSON.stringify(json));
    // $("#json").text(JSON.stringify(json, null, 2));
  });
}

function getCanvasJSON(canvas) {
  const writer = new draw2d.io.json.Writer();
  let canvasJSON = {};
  writer.marshal(canvas, (json) => {
    // console.log(JSON.stringify(json));
    canvasJSON = JSON.stringify(json);
  });
  return canvasJSON;
}
