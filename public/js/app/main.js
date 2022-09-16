// //the document to load....in this case a simple JSON Object
// const bitJSON = [
//   {
//     type: "BitSend",
//     id: "354fa3b9-a834-0221-2009-abc2d6bd852a",
//     x: 150,
//     y: 150,
//   },
// ];

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

  let bitSend = new BitSend({ x: 125, y: 150, width: 20, height: 20 });
  canvas.add(bitSend, 50, 50);

  let bitReceive = new BitReceive({ x: 175, y: 200, width: 20, height: 20 });
  canvas.add(bitReceive, 50, 150);

  let andSimple = new AndSimple({ x: 175, y: 200, width: 70, height: 70 });
  canvas.add(andSimple, 150, 250);

  let andFancy = new AndFancy({ x: 275, y: 250, width: 70, height: 70 });
  canvas.add(andFancy, 150, 250);

  // let AND = new circuit_digital_gate_DIN40700_AND({ x: 150, y: 150, width: 100, height: 140 });

  const exportLink = document.getElementById("export-json");
  exportLink.addEventListener("click", (e) => exportJSON(e, canvas));

  const importLink = document.getElementById("import-json");
  importLink.addEventListener("click", (e) => importJSON(e, canvas));

  const addTriangle = document.getElementById("add-triangle");
  addTriangle.addEventListener("click", (e) => addShape(e, canvas));
});

function addShape(e, canvas) {
  // Add a simple triangle
  let triangle = new TriangleFigure({ x: 100, y: 100, width: 100, height: 140 });
  canvas.add(triangle);
}

function exportJSON(e, canvas) {
  console.log("Clicked Export JSON", canvas);
  // displayJSON(canvas);
  const canvasJSON = getCanvasJSON(canvas);
  putCanvasJSON(canvasJSON);
  // console.log(canvasJSON);
}

// Fetches a JSON canvas and puts it onto the current canvas
async function importJSON(e, canvas) {
  try {
    const canvasJson = await (await fetch("/circuits")).json();
    console.log("IMPORTED:", JSON.parse(canvasJson[0].canvas));

    // Define reader and import the json into the canvas
    let reader = new draw2d.io.json.Reader();
    reader.unmarshal(canvas, JSON.parse(canvasJson[0].canvas));

    // reader.unmarshal(canvas, bitJSON);
  } catch (error) {
    console.log(error);
  }
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

async function putCanvasJSON(canvasJSON) {
  // const ticketId = this.parentNode.dataset.id;
  console.log("CHECK:", canvasJSON);
  //   return;
  try {
    const response = await fetch("circuits/createCircuit", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: "Canvas Save",
        canvas: canvasJSON,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}