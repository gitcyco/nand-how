// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
var OrClean = draw2d.SetFigure.extend({
  NAME: "OrClean",

  init: function (attr, setter, getter) {
    this._super($.extend({ stroke: 0, bgColor: null, width: 50, height: 40 }, attr), setter, getter);
    var port;
    // output
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(97.26905609435926, 50.000000000000036));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("output");
    port.setMaxFanOut(20);
    // input2
    port = this.addPort(
      new DecoratedInputPort(),
      new draw2d.layout.locator.XYRelPortLocator(22.820501641169983, 77.50000000000003)
    );
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("input2");
    port.setMaxFanOut(20);
    // input1
    port = this.addPort(
      new DecoratedInputPort(),
      new draw2d.layout.locator.XYRelPortLocator(22.820501641169983, 22.500000000000036)
    );
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("input1");
    port.setMaxFanOut(20);
    this.persistPorts = false;
  },

  createShapeElement: function () {
    var shape = this._super();
    this.originalWidth = 50;
    this.originalHeight = 40;
    return shape;
  },

  createSet: function () {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L50,0 L50,40 L0,40");
    shape.attr({ stroke: "none", "stroke-width": 0, fill: "none" });
    shape.data("name", "BoundingBox");

    // Rectangle
    shape = this.canvas.paper.path(
      "M0 40L6.6433020774841225 39.44110780459704L17.053172310124864 37.91702186871686L26.461969855308155 35.84853628980619L34.583813160704494 33.29850095547613L41.171924127331124 30.344397398980107L46.0261263372106 27.075984562033682L48.998927312542094 23.592571514790848L50 20L48.998927312542094 16.407428485209152L46.0261263372106 12.924015437966318L41.171924127331124 9.655602601019893L34.583813160704494 6.7014990445238425L26.461969855308155 4.151463710193781L17.053172310124864 2.0829781312831415L6.6433020774841225 0.5588921954029331L0 0L1.3098414343405693 0.45792107955401207L5.607493880797733 2.7140163572772735L9.317304787405135 5.495337500854845L12.326553427019803 8.717375474755613L14.543805302480905 12.28223028557241L15.90169033753557 16.08158562378219L16.358949882517095 20L15.90169033753557 23.91841437621781L14.543805302480905 27.71776971442756L12.326553427019803 31.282624525244387L9.317304787405135 34.50466249914513L5.607493880797733 37.28598364272278L1.3098414343405693 39.54207892044593L0 40Z"
    );
    shape.attr({ stroke: "#303030", "stroke-width": 1, fill: "none", dasharray: null, opacity: 1 });
    shape.data("name", "Rectangle");

    // Label
    shape = this.canvas.paper.text(0, 0, "OR");
    shape.attr({
      x: 20.63452804717963,
      y: 19.38255328908749,
      "text-anchor": "start",
      text: "OR",
      "font-family": '"Arial"',
      "font-size": 10,
      stroke: "none",
      fill: "#080808",
      "stroke-scale": true,
      "font-weight": "normal",
      "stroke-width": 0,
      opacity: 1,
    });
    shape.data("name", "Label");

    return this.canvas.paper.setFinish();
  },

  applyAlpha: function () {},

  layerGet: function (name, attributes) {
    if (this.svgNodes === null) return null;

    var result = null;
    this.svgNodes.some(function (shape) {
      if (shape.data("name") === name) {
        result = shape;
      }
      return result !== null;
    });

    return result;
  },

  layerAttr: function (name, attributes) {
    if (this.svgNodes === null) return;

    this.svgNodes.forEach(function (shape) {
      if (shape.data("name") === name) {
        shape.attr(attributes);
      }
    });
  },

  layerShow: function (name, flag, duration) {
    if (this.svgNodes === null) return;

    if (duration) {
      this.svgNodes.forEach(function (node) {
        if (node.data("name") === name) {
          if (flag) {
            node.attr({ opacity: 0 }).show().animate({ opacity: 1 }, duration);
          } else {
            node.animate({ opacity: 0 }, duration, function () {
              this.hide();
            });
          }
        }
      });
    } else {
      this.svgNodes.forEach(function (node) {
        if (node.data("name") === name) {
          if (flag) {
            node.show();
          } else {
            node.hide();
          }
        }
      });
    }
  },

  calculate: function () {},

  onStart: function () {},

  onStop: function () {},

  getParameterSettings: function () {
    return [];
  },

  /**
   * @method
   */
  addPort: function (port, locator) {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes: function () {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function (i, e) {
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator = e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes: function (memento) {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(
      memento.labels,
      $.proxy(function (i, json) {
        // create the figure stored in the JSON
        var figure = eval("new " + json.type + "()");

        // apply all attributes
        figure.attr(json);

        // instantiate the locator
        var locator = eval("new " + json.locator + "()");

        // add the new figure as child to this figure
        this.add(figure, locator);
      }, this)
    );
  },
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
OrClean = OrClean.extend({
  init: function (attr, setter, getter) {
    this._super(attr, setter, getter);

    // your special code here
  },

  /**
   *  Called by the simulator for every calculation
   *  loop
   *  @required
   **/
  calculate: function () {},

  /**
   *  Called if the simulation mode is starting
   *  @required
   **/
  onStart: function () {},

  /**
   *  Called if the simulation mode is stopping
   *  @required
   **/
  onStop: function () {},
});
