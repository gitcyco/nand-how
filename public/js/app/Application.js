// declare the namespace for this example
let mainApp = {};

let defaultRouterClassName = "draw2d.layout.connection.CircuitConnectionRouter";
let defaultRouter = new draw2d.layout.connection.CircuitConnectionRouter();
defaultRouter.setBridgeRadius(5);
defaultRouter.abortRoutingOnFirstVertexNode = false;

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Micah Nerren
 * @extends draw2d.ui.parts.GraphicalEditor
 */
mainApp.Application = Class.extend({
  NAME: "mainApp.Application",

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  init: function () {
    this.view = new mainApp.View("main-canvas");

    this.toolbar = new mainApp.Toolbar("toolbar", this, this.view);

    // this.appLayout = $("#container").layout({
    //   north: {
    //     resizable: false,
    //     closable: false,
    //     spacing_open: 0,
    //     spacing_closed: 0,
    //     size: 50,
    //     paneSelector: "#toolbar",
    //   },
    //   center: {
    //     resizable: false,
    //     closable: false,
    //     spacing_open: 0,
    //     spacing_closed: 0,
    //     paneSelector: "#main-canvas",
    //   },
    // });

    // this.toolbar = new mainApp.Toolbar("toolbar", this.view);

    // Override the default connection type. This is used during drag & drop operations of ports.
    // createConnection lets us apply our custom Router
    this.view.installEditPolicy(
      new draw2d.policy.connection.ComposedConnectionCreatePolicy([
        // create a connection via Drag&Drop of ports
        //
        new draw2d.policy.connection.DragConnectionCreatePolicy({
          createConnection: this.createConnection,
        }),
        // or via click and point
        //
        new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({
          createConnection: this.createConnection,
        }),
      ])
    );

    // // Override the default connection type. This is used during drag & drop operations of ports.
    // // createConnection lets us apply our custom Router
    // this.view.installEditPolicy(
    //   new draw2d.policy.connection.DragConnectionCreatePolicy([
    //     // create a connection via Drag&Drop of ports
    //     //
    //     new draw2d.policy.connection.DragConnectionCreatePolicy({
    //       createConnection: this.createConnection,
    //     }),
    //     // or via click and point
    //     //
    //     new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({
    //       createConnection: this.createConnection,
    //     }),
    //   ])
    // );
  },

  // layout: function () {
  //   this.appLayout.resizeAll();
  // },

  /**
   * Load the JSON data into the view/canvas
   */
  load: function (jsonDocument) {
    this.view.clear();

    // unmarshal the JSON document into the canvas
    // (load)
    var reader = new draw2d.io.json.Reader();
    reader.unmarshal(this.view, jsonDocument);
  },

  createConnection: function (sourcePort, targetPort) {
    const c = new draw2d.Connection({
      outlineColor: "#ffffff",
      outlineStroke: 1,
      color: "#000000",
      router: defaultRouter,
      stroke: 1,
      radius: 2,
    });
    if (sourcePort) {
      c.setSource(sourcePort);
      c.setTarget(targetPort);
    }
    return c;

    const conn = new draw2d.Connection();

    conn.setRouter(defaultRouter);
    conn.setOutlineStroke(1);
    conn.setOutlineColor("#303030");
    conn.setStroke(1);
    conn.setRadius(5);

    conn.setColor("#00A8F0");
    // this.view.getCommandStack().notifyListeners(null, draw2d.command.CommandStack.POST_EXECUTE);
    return conn;
  },
});
