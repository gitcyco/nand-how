// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
var AndClean = draw2d.SetFigure.extend({
  NAME: "AndClean",

  init: function (attr, setter, getter) {
    this._super($.extend({ stroke: 0, bgColor: null, width: 50, height: 40 }, attr), setter, getter);
    var port;
    // Port
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.6164664320000384, 22.5));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Port");
    port.setMaxFanOut(20);
    // Port
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.6164664320000384, 77.5));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Port");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.35551887266377, 50));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Port");
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
      "M33.223876766324224 0.017293963908841192L33.223876766324224 0L0 0L0 40L33.223876766324224 40L33.223876766324224 39.982706036091145L33.388061616838 40L36.27269444458943 39.696155060244166L39.06967916356439 38.79385241571816L41.69403080841954 37.32050807568879L44.06600978241096 35.32088886237955L46.11354470469382 32.85575219373078L47.77442226275804 30L48.998177532445595 26.840402866513386L49.74762732913706 23.472963553338616L50 20L49.74762732913706 16.527036446661327L48.998177532445595 13.159597133486614L47.77442226275804 10L46.11354470469382 7.14424780626922L44.06600978241096 4.679111137620453L41.69403080841954 2.679491924311236L39.06967916356439 1.206147584281851L36.27269444458943 0.30384493975584803L33.388061616838 1.4210854715202004e-14L33.223876766324224 0.017293963908841192Z"
    );
    shape.attr({ stroke: "#303030", "stroke-width": 1, fill: "#FFFFFF", dasharray: null, opacity: 1 });
    shape.data("name", "Rectangle");

    // Label
    shape = this.canvas.paper.text(0, 0, "AND");
    shape.attr({
      x: 14.443400945547296,
      y: 20.02669363200004,
      "text-anchor": "start",
      text: "AND",
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
AndClean = AndClean.extend({
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