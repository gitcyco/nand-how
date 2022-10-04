// Instantiate the container class for main drawing application
const app = new mainApp.Application();

document.addEventListener("DOMContentLoaded", function () {
  // const canvas = new draw2d.Canvas("main-canvas");
  const canvas = app.view;
  canvas.paper.canvas.style.position = "relative";

  // Add a simple triangle
  // let triangle = new TriangleFigure({ x: 100, y: 100, width: 100, height: 140 });
  // canvas.add(triangle);

  // Add a basic PostIt note
  // let msg = new draw2d.shape.note.PostIt({ text: "Just a basic triangle" });
  // canvas.add(msg, 20, 20);

  // bitSend is a bit initiator, toggle 0/1, false/true, off/on, red/green
  // let bitSend = new BitSend({ x: 125, y: 150, width: 20, height: 20 });
  // canvas.add(bitSend, 50, 50);

  // bitSend is a bit initiator, toggle 0/1, true/false, on/off, red/green
  // canvas.add(new BitSend({ x: 125, y: 150, width: 20, height: 20 }), 80, 50);

  // bitReceive is a bit receiver, it displays its input bit as red/green, 0/1, false/true, off/on
  // let bitReceive = new BitReceive({ x: 175, y: 200, width: 20, height: 20 });
  // canvas.add(bitReceive, 50, 150);

  // let andSimple = new AndSimple({ x: 175, y: 200, width: 70, height: 70 });
  // canvas.add(andSimple, 150, 250);

  // let andClean = new AndClean({ x: 275, y: 250, width: 70, height: 70 });
  // canvas.add(andClean, 150, 250);

  // let AND = new circuit_digital_gate_DIN40700_AND({ x: 150, y: 150, width: 100, height: 140 });

  //   const exportLink = document.getElementById("export-json");
  //   exportLink.addEventListener("click", (e) => exportJSON(e, canvas));
  //
  //   const importLink = document.getElementById("import-json");
  //   importLink.addEventListener("click", (e) => importJSON(e, canvas));
  //
  //   const addTriangle = document.getElementById("add-triangle");
  //   addTriangle.addEventListener("click", (e) => addShape(e, canvas));
  //
  //   const downloadCanvas = document.getElementById("download-canvas");
  //   downloadCanvas.addEventListener("click", (e) => getCanvasImage(e, canvas, downloadCanvas));
  //
  //   const zoomIn = document.getElementById("side-zoom-in");
  //   zoomIn.addEventListener("click", (e) => zoomInHandler(e, canvas, zoomIn));
  //
  //   const zoomOut = document.getElementById("side-zoom-out");
  //   zoomOut.addEventListener("click", (e) => zoomOutHandler(e, canvas, zoomOut));

  const circuitElements = document.querySelectorAll(".insert-circuit");
  circuitElements.forEach((element) => {
    element.addEventListener("click", (e) => insertElement(e, canvas, element.dataset.circuit));
  });

  const saveSketch = document.getElementById("save-sketch-button");
  saveSketch.addEventListener("click", (e) => saveSketchHandler(e, canvas));

  const loadSketchTab = document.getElementById("tab-load");
  loadSketchTab.addEventListener("click", (e) => getAllCircuitsHandler(e, canvas));

  const getAllCircuitsButton = document.getElementById("load-sketch-button");
  getAllCircuitsButton.addEventListener("click", (e) => getAllCircuitsHandler(e, canvas));
});

// This function creates and inserts a new logic gate or other figure based
// on the type of the button that was clicked.
function insertElement(e, canvas, circuitType) {
  console.log("INSERTING:", circuitType);
  switch (circuitType) {
    case "AND":
      let andClean = new AndClean({ x: 275, y: 200, width: 70, height: 70 });
      canvas.add(andClean, 150, 200);
      break;
    case "NAND":
      let nandClean = new NandClean({ x: 275, y: 220, width: 70, height: 70 });
      canvas.add(nandClean, 150, 220);
      break;
    case "NOT":
      let notClean = new NotClean({ x: 275, y: 230, width: 70, height: 70 });
      canvas.add(notClean, 150, 230);
      break;
    case "OR":
      let orClean = new OrClean({ x: 275, y: 240, width: 70, height: 70 });
      canvas.add(orClean, 150, 240);
      break;
    case "XNOR":
      let xnorClean = new XnorClean({ x: 275, y: 260, width: 70, height: 70 });
      canvas.add(xnorClean, 150, 260);
      break;
    case "XOR":
      let xorClean = new XorClean({ x: 275, y: 280, width: 70, height: 70 });
      canvas.add(xorClean, 150, 280);
      break;
    case "BIT-SEND":
      // bitSend is a bit initiator, toggle 0/1, false/true, off/on, red/green
      let bitSend = new BitSend({ x: 125, y: 150, width: 30, height: 30 });
      canvas.add(bitSend, 50, 50);
      break;
    case "BIT-RECEIVE":
      // bitReceive is a bit receiver, it displays its input bit as red/green, 0/1, false/true, off/on
      let bitReceive = new BitReceive({ x: 175, y: 200, width: 30, height: 30 });
      canvas.add(bitReceive, 50, 150);
      break;

    default:
      console.log("NOT SUPPORTED");
      break;
  }
}

//
async function saveSketchHandler(event, canvas) {
  // create a PNG image of the canvas
  const writer = new draw2d.io.png.Writer();
  let pngImage;

  // this dumps the canvas into a png base64 encode
  writer.marshal(canvas, function (png) {
    // console.log("PNG:", png);
    pngImage = png;
  });

  const saveName = document.getElementById("save-name").value;

  // Grab a JSON representation of the canvas
  const canvasJSON = getCanvasJSON(canvas);

  // Send the canvas to the server with a screenshot
  putCanvasJSON(canvasJSON, saveName, pngImage);

  // Clear the form before it closes
  document.getElementById("saveName").value = "";
}

function zoomInHandler(event, canvas, zoomIn) {
  canvas.setZoom(canvas.getZoom() * 0.7, true);
}

function zoomOutHandler(event, canvas, zoomOut) {
  canvas.setZoom(canvas.getZoom() * 1.3, true);
}

// Test function for grabbing an image and downloading it
function getCanvasImage(event, canvas, element) {
  console.log("DOWNLOAD!", canvas);

  // create a PNG image and set an
  // image src attribute and auto-download. Just a test for now!
  //
  const writer = new draw2d.io.png.Writer();
  writer.marshal(canvas, function (png) {
    console.log("PNG:", png);

    const createEl = document.createElement("a");
    createEl.href = png;

    // This is the name of our downloaded file
    createEl.download = "download-this-canvas";

    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
  });

  // let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
  // console.log(canvasUrl);
}

// function addShape(e, canvas) {
//   // Add a simple triangle
//   let triangle = new TriangleFigure({ x: 100, y: 100, width: 100, height: 140 });
//   canvas.add(triangle);
// }

function exportJSON(e, canvas) {
  console.log("Clicked Export JSON", canvas);
  // displayJSON(canvas);
  const canvasJSON = getCanvasJSON(canvas);
  putCanvasJSON(canvasJSON);
  // console.log(canvasJSON);
}

// Fetches a JSON canvas and puts it onto the current canvas
async function importJSON(e, canvas, sketchId) {
  try {
    const canvasJson = await (await fetch(`/circuits/load/${sketchId}`)).json();
    console.log("IMPORTED:", JSON.parse(canvasJson.canvas));

    // Define reader and import the json into the canvas
    let reader = new draw2d.io.json.Reader();
    reader.unmarshal(canvas, JSON.parse(canvasJson.canvas));

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

// Utility function to grab a JSON export of the current canvas
function getCanvasJSON(canvas) {
  const writer = new draw2d.io.json.Writer();
  let canvasJSON = {};
  writer.marshal(canvas, (json) => {
    // console.log(JSON.stringify(json));
    canvasJSON = JSON.stringify(json);
  });
  return canvasJSON;
}

// This saves a JSON sketch to the database along with a screenshot of the current canvas
async function putCanvasJSON(canvasJSON, sketchTitle, png) {
  try {
    const response = await fetch("circuits/createCircuit", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: sketchTitle,
        canvas: canvasJSON,
        image: png,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

// This populates the Load dialogue and configures the buttons with the proper ID's
async function getAllCircuitsHandler(event, canvas) {
  try {
    const canvas = app.view;
    const loadCarouselInnerItems = document.getElementById("loadCarouselInnerItems");
    const loadSketchButton = document.getElementById("load-sketch-button");
    const deleteSketchButton = document.getElementById("delete-sketch-button");

    loadSketchButton.addEventListener("click", (e) => {
      console.log("LOAD:", e.target.dataset.sketchId);
      importJSON(e, canvas, e.target.dataset.sketchId);
    });

    const response = await fetch("circuits/listCircuits");
    const data = await response.json();
    console.log("DATA:", data);
    if (data.length === 0) return;

    loadSketchButton.dataset.sketchId = data[0]._id;
    deleteSketchButton.dataset.sketchId = data[0]._id;

    loadCarouselInnerItems.innerHTML = data
      .map((item, i) => {
        return `<div data-circuit-id="${item._id}" class="carousel-item ${i == 0 ? "active" : ""}">
                  <img class="shadow-1-strong mb-4"
                    src="${item.image}" alt="avatar"
                    style="width: 150px;" />
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                      <p class="text-muted">
                        ${item.title}
                      </p>
                    </div>
                  </div>
                </div>`;
      })
      .join("");

    // Every time the carousel rotates to the next item, update the load/delete controls
    // to have the current items database id.
    const myCarousel = document.getElementById("loadCarouselControls");
    myCarousel.addEventListener("slide.mdb.carousel", (e) => {
      loadSketchButton.dataset.sketchId = e.relatedTarget.dataset.circuitId;
      deleteSketchButton.dataset.sketchId = e.relatedTarget.dataset.circuitId;
      console.log("SLIDING:", e.relatedTarget.dataset.circuitId);
    });
  } catch (error) {
    console.log(error);
  }
}
